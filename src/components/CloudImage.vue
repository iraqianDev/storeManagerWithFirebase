<script setup>
import { onMounted, ref } from "vue"
import { storage } from "../firebase"
import { ref as firebaseRef, getDownloadURL } from "firebase/storage"

const url = ref(null)

let { path } = defineProps(["path"])

onMounted(async () => {
  let link = await getDownloadURL(firebaseRef(storage, path))
  url.value = link
})
</script>

<template>
  <img
    :src="url"
    alt="product image"
    className="block w-full aspect-[4/3] object-cover"
  />
</template>
