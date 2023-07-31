<script setup>
import Swal from "sweetalert2"
import { defineEmits } from "vue"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth"
import { onMounted, ref } from "vue"
const email = ref("")
const password = ref("")
const login = ref(false)
const isLoggedIn = ref(false)
const emit = defineEmits(["Login"])

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    // if user already login before let him in
    if (user) {
      isLoggedIn.value = true
      emit("Login", isLoggedIn)
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSubmitSignup = async (signup) => {
  signup.preventDefault()
  try {
    // Generate Auth user for signup
    await createUserWithEmailAndPassword(
      getAuth(),
      email.value,
      password.value
    )
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error.code}!`,
    })
  }
}

const handleSubmitLogin = async (form) => {
  form.preventDefault()
  try {
    // Try to log in if they connect from another account
    await signInWithEmailAndPassword(
      getAuth(),
      email.value,
      password.value
    )
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error.code}!`,
    })
  }
}

const handleChangeLogin = () => {
  // Change from login page to signup page
  login.value = !login.value
  password.value = ""
  email.value = ""
}
</script>

<template>
  <main
    class="w-full h-screen flex flex-col items-center justify-center px-4"
    v-if="!login"
  >
    <div class="max-w-sm w-full text-gray-600">
      <div class="text-center">
        <div class="mt-5 space-y-2">
          <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">Sign up</h3>
          <p class="">
            Already have an account?
            <button
              @click="handleChangeLogin"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
      <form @submit="handleSubmitSignup" class="mt-8 space-y-5">
        <div>
          <label class="font-medium"> Email </label>
          <input
            type="email"
            v-model="email"
            placeholder="Email Address"
            required
            class="w-full border-black mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label class="font-medium"> Password </label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
            class="w-full border-black mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <button
          class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        >
          Create account
        </button>
      </form>
    </div>
  </main>
  <main
    class="w-full h-screen flex flex-col items-center justify-center px-4"
    v-if="login"
  >
    <div class="max-w-sm w-full text-gray-600">
      <div class="text-center">
        <div class="mt-5 space-y-2">
          <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">Login</h3>
          <p class="">
            new to the service?
            <button
              @click="handleChangeLogin"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              signup!
            </button>
          </p>
        </div>
      </div>
      <form @submit="handleSubmitLogin" class="mt-8 space-y-5">
        <div>
          <label class="font-medium"> Email </label>
          <input
            type="email"
            placeholder="Email Address"
            v-model="email"
            required
            class="w-full border-black mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label class="font-medium"> Password </label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
            class="w-full border-black mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <button
          class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        >
          Login
        </button>
      </form>
    </div>
  </main>
</template>
