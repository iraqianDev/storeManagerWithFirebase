// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "aswartask.firebaseapp.com",
  projectId: "aswartask",
  storageBucket: "aswartask.appspot.com",
  messagingSenderId: "691853190479",
  appId: "1:691853190479:web:dd85c084597b639709113a",
  databaseURL:
    "https://aswartask-default-rtdb.europe-west1.firebasedatabase.app",
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const storage = getStorage(firebase)
const db = getDatabase(firebase)

export { firebase, storage, db }
