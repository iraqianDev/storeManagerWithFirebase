<script setup>
import {ref as vueRef } from "vue"
import Swal from "sweetalert2"
import CloudImage from "./CloudImage.vue"
import { ref as dbRef, onValue, remove, update, get } from "firebase/database"
import { storage, db } from "../firebase"
import { ref as firebaseRef, uploadBytes, deleteObject } from "firebase/storage"

const products = vueRef([])
const filterItem = vueRef("title")
const EditTitle = vueRef("")
const EditDesc = vueRef("")
const EditPrice = vueRef()
const EditFile = vueRef()
const EditQuantity = vueRef()
const empty = vueRef(false)
const refFilterSearch = vueRef("")
const refFilterUpdate = vueRef("title")
const filteredArray = vueRef([])

function fetchOnValue() {
  // automatically fetch data on change
  onValue(dbRef(db), (snapshot) => {
    const data = snapshot.val()
    if (data !== null) {
      // if there's data put it in array
      empty.value = false
      let productFromDb = []
      Object.values(data).map((product) => {
        productFromDb.push(product)
      })
      products.value = productFromDb
    } else {
      // if there's no data show no items
      products.value = []
      empty.value = true
    }
  })
}

fetchOnValue()



const handleDelete = (item) => {
  // verification if they want to delete
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // if confirmed then delete item
      remove(dbRef(db, `/${item.id}`))

      Swal.fire("Deleted!", "Your file has been deleted.", "success")
      fetchOnValue()
    }
  })
  // refetch the data
  handleSearch()
}

const handleEdit = async (item, index) => {
  // edit pop it with all info
  let info = await Swal.fire({
    title: "Edit Product",
    html: `
    <input  style="width:67% !important" id="swal-input1" class="swal2-input" placeholder="Enter Title" value="${item.title}">

    <textarea style="width:67% !important" id="swal-input2" class="swal2-textarea" placeholder="Enter textarea">${item.desc}</textarea>
     <input style="width:67% !important" id="swal-input3" class="swal2-input" placeholder="Enter Price" value="${item.price}">
        <input  style="width:67% !important" id="swal-input4" class="swal2-input" placeholder="Enter Quantity" value="${item.quantity}">
     <input id="swal-input-file" type="file" class="swal2-file-input" style="margin-top: 20px">
  `,
    focusConfirm: false,
    showCancelButton: true,
    cancelButtonText: "Cancel",
    preConfirm: () => {
      EditTitle.value = document.getElementById("swal-input1").value
      EditDesc.value = document.getElementById("swal-input2").value
      EditPrice.value = document.getElementById("swal-input3").value
      EditQuantity.value = document.getElementById("swal-input4").value
      EditFile.value = document.getElementById("swal-input-file").files[0]
    },
  })
  if (info.isConfirmed) {
    // if they confirm to edit do next
    let trimedTitle = EditTitle.value.trim()
    let trimedDesc = EditDesc.value.trim()
    let trimedQuantity = EditQuantity.value.trim()
    let checkNumber = !isNaN(EditPrice.value)
    if (trimedTitle && trimedDesc && checkNumber && trimedQuantity) {
      // if all the fields are filled then process
      if (EditFile.value) {
        // if they change the img delete the old one and put new one
        const deleteRef = firebaseRef(storage, `${item.file}`)
        await deleteObject(deleteRef)
        const filetype = EditFile.value.name.split(".")[1]
        const storageRef = firebaseRef(
          storage,
          `images/${item.id}2.${filetype}`
        )

        const img = await uploadBytes(storageRef, EditFile.value)
        const path = img.metadata.fullPath
        await update(dbRef(db, `/${item.id}`), {
          title: trimedTitle,
          desc: trimedDesc,
          quantity: Number(trimedQuantity),
          price: Number(EditPrice.value),
          id: item.id,
          file: path,
        })
      } else {
            // if they don't change the img only change the text
        update(dbRef(db, `/${item.id}`), {
          title: trimedTitle,
          desc: trimedDesc,
          quantity: trimedQuantity,

          price: EditPrice.value,
          id: item.id,
        })
      }
    } else {
      // if any field is empty show error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Fill All Information",
      })
    }
  }
  // Refetch the Data
  handleSearch()
}

const handleFilterChange = (value) => {
  // on selection change put the item the person want to filter
  filterItem.value = value
  handleFilter()
}

function handleFilter() {
  // handle filter
  products.value.sort((a, b) => {
    if (filterItem.value === "title") {
      // if it's title sort by alphabet
      return a.title.localeCompare(b.title)
    } else if (filterItem.value === "date") {
      // if it's data sort by data
      return a.date.localeCompare(b.date)
    } else {
      // other wise sort by numbers
      return b[filterItem.value] - a[filterItem.value]
    }
  })
}

const handleSearch = () => {
  // handle search
  filteredArray.value = []
  // if the search field is empty do nothing
  if (isNaN(refFilterSearch.value)) {
    // if the search field is not a number search text
    if (refFilterSearch.value.trim()) {
      const searchTerm = refFilterSearch.value.toLowerCase().trim()
      products.value.filter((item) => {
        if (item[refFilterUpdate.value].toLowerCase().includes(searchTerm)) {
          filteredArray.value.push(item)
        }
      })
    }
  } else if (!isNaN(refFilterSearch.value)) {
    // if the search field is  a number by numbers
    products.value.filter((item) => {
      if (+item[refFilterUpdate.value] >= +refFilterSearch.value) {
        filteredArray.value.push(item)
      }
    })
  } else {
    // if nothing match keep it empty
    filteredArray.value = []
  }
}

const handleSearchFilter = (value) => {
  // change the filter from title to price or quantity
  refFilterUpdate.value = value
}
</script>

<template>
  <h2 v-if="empty" class="container mt-20">There's No Products</h2>

  <div v-if="products.length > 0" class="container my-20">
    <div class="mb-5">
      <label for="filters">Filter Products By: </label>
      <select
        name="filter"
        id="filters"
        @change="handleFilterChange($event.target.value)"
        class="outline-none w-full border-b border-gray text-darkblue h-[38px] text-xl"
      >
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="date">Date</option>
        <option value="quantity">Quantity</option>
      </select>
    </div>
    <div class="items-stretch justify-center grid-auto">
      <div
        v-for="(item, index) in products"
        :key="item.file"
        className="bg-white rounded overflow-hidden relative group"
      >
        <div>
          <CloudImage :path="item.file" />
        </div>

        <div className="px-4 pt-2 pb-12">
          <p class="text-sm text-slate-400 mb-0">Order Date {{ item.date }}</p>
          <h3 className=" text-2xl text-blue-500 font-bold my-1">
            {{ item.title }}
          </h3>
          <p className="text-slate-600 line-clamp-3 break-words">
            {{ item.desc }}
          </p>
          <p class="text-lg">
            Price: {{ item.price }}<span class="text-green-500">$</span>
          </p>
          <p className="text-gray-400">Quantity: {{ item.quantity }}</p>
        </div>

        <div class="absolute flex gap-2 justify-end w-full -left-2 bottom-2">
          <button
            @click="handleDelete(item, index)"
            class="btn bg-red-500 hover:bg-red-400"
          >
            Delete
          </button>
          <button
            @click="handleEdit(item, index)"
            class="btn bg-green-500 hover:bg-green-600"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-end justify-center gap-4">
      <input
        v-model="refFilterSearch"
        @keyup="handleSearch"
        type="text"
        placeholder="Search"
        class="mx-auto input border-gray-500 mt-5 w-3/4"
      />
      <select
        name="filter"
        id="filters"
        @change="handleSearchFilter($event.target.value)"
        class="outline-none w-1/4 border-b border-gray text-darkblue text-xl h-12"
      >
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="quantity">Quantity</option>
      </select>
    </div>
    <div class="grid-auto mt-10">
      <div
        v-for="(item, index) in filteredArray"
        :key="item.file"
        className="bg-white rounded overflow-hidden relative group"
      >
        <div>
          <CloudImage :path="item.file" />
        </div>

        <div className="px-4 pt-2 pb-12">
          <p class="text-sm text-slate-400 mb-0">Order Date {{ item.date }}</p>
          <h3 className="text-2xl text-blue-500 font-bold my-1">
            {{ item.title }}
          </h3>
          <p className="text-slate-600 line-clamp-3 break-words">
            {{ item.desc }}
          </p>
          <p class="text-lg">
            Price: {{ item.price }}<span class="text-green-500">$</span>
          </p>
          <p className="text-gray-400">Quantity: {{ item.quantity }}</p>
        </div>

        <div class="absolute flex gap-2 justify-end w-full -left-2 bottom-2">
          <button
            @click="handleDelete(item, index)"
            class="btn bg-red-500 hover:bg-red-400"
          >
            Delete
          </button>
          <button
            @click="handleEdit(item, index)"
            class="btn bg-green-500 hover:bg-green-600"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="grid-auto container mt-20 items-center justify-center"
    v-if="products.length === 0 && !empty"
  >
    <div
      role="status"
      class="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <div
        class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"
      >
        <svg
          class="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path
            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
          />
          <path
            d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
          />
        </svg>
      </div>
      <div
        class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
      ></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
    <div
      role="status"
      class="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <div
        class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"
      >
        <svg
          class="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path
            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
          />
          <path
            d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
          />
        </svg>
      </div>
      <div
        class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
      ></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
    <div
      role="status"
      class="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <div
        class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"
      >
        <svg
          class="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path
            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
          />
          <path
            d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
          />
        </svg>
      </div>
      <div
        class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
      ></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
  </div>
</template>
