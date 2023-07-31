<script setup>
import Form from "./components/Form.vue"
import Data from "./components/Data.vue"
import Login from "./components/Login.vue"
import { ref } from "vue"
import {
  getAuth,
  signOut
} from "firebase/auth"

const isLoggedIn = ref(false)
const setSignOut = () =>{
  signOut(getAuth()).then(() => {
    isLoggedIn.value = false
  })
}
</script>

<template>
  <div v-if="!isLoggedIn">
    <Login @Login="(userLoggedIn) => (isLoggedIn = userLoggedIn.value)" />
  </div>
  <div v-if="isLoggedIn">
    <button class="ml-auto w-fit block btn bg-slate-600 mt-5" @click="setSignOut">Sign Out</button>
    <Form />
    <Data />
  </div>
</template>
