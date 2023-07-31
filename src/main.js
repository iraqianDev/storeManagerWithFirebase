import { createApp } from "vue"
import App from "./App.vue"
import "./style.css"
import { firebase } from "./firebase.js"
firebase

createApp(App).mount("#app")
