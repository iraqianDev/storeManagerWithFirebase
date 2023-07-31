<script setup>
import { ref as firebaseRef, uploadBytes } from "firebase/storage"
import { ref as vueRef } from "vue"
import { set, ref as dbRef } from "firebase/database"
import { storage, db } from "../firebase"


import Swal from "sweetalert2"
const title = vueRef("")
const desc = vueRef("")
const price = vueRef()
const quantity = vueRef()
const file = vueRef(null)

const handleSubmit = async () => {
  const trimedTitle = title.value.trim()
  const trimedDesc = desc.value.trim()
  const checkNumber = !isNaN(price.value)
// if all info are filled process
  if (
    trimedTitle &&
    trimedDesc &&
    file.value &&
    checkNumber &&
    quantity.value > 0
  ) {
    const filetype = file.value.name.split(".")[1]
    // generate Random id
    const randomId =
      (Math.random() + 1).toString(36).substring(2) +
      (Math.random() + 1).toString(36).substring(2)
    //upload img to firebase store
    const storageRef = firebaseRef(storage, `images/${randomId}.${filetype}`)
    const img = await uploadBytes(storageRef, file.value)
    const path = img.metadata.fullPath

    try {
      // upload data to firebase database with img id
      set(dbRef(db, `/${randomId}`), {
        id: randomId,
        title: trimedTitle,
        desc: trimedDesc,
        price: Number(price.value),
        file: path,
        quantity: Number(quantity.value),
        date: new Date().toDateString(),
      })
    } catch (error) {
      console.log("Error adding document: ", error)
    }

    title.value = ""
    desc.value = ""
    price.value = ""
    quantity.value = ""
  } else {
    // error if info is missing
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Fill All Information",
    })
  }
}

// Function to handle file changes
const handleFileChange = (event) => {
  // save file to variable
  const selectedFile = event.target.files[0]
  file.value = selectedFile
}
</script>

<template>
  <div
    class="grid bg-white w-[90%] sm:w-[80%] md:w-1/2 mx-auto gap-4 p-4 rounded my-3"
  >
    <h1 class="text-center text-3xl font-bold">Upload Post</h1>
    <input
      class="px-4 py-2 rounded border w-full"
      type="text"
      v-model="title"
      placeholder="Title"
    />
    <textarea
      class="px-4 py-2 rounded border"
      rows="5"
      type="text"
      v-model="desc"
      placeholder="Description"
    />
    <input
      class="px-4 py-2 rounded border w-full"
      type="number"
      v-model="price"
      placeholder="Price in USD$"
    />
    <input
      class="px-4 py-2 rounded border w-full"
      type="number"
      v-model="quantity"
      placeholder="Quantity"
    />
    <input
      type="file"
      name="myFile"
      id="file-upload"
      class="input-file"
      accept=".jpeg, .png, .jpg"
      @change="handleFileChange"
    />

    <button
      class="bg-blue-500 text-white rounded w-fit px-5 py-3"
      @click="handleSubmit"
    >
      Upload
    </button>
  </div>
</template>
