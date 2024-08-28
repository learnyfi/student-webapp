// Firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgWB7KvXdKaa88fad5qs6uv-bj_wlLtAU",
  authDomain: "entp209-d29cd.firebaseapp.com",
  projectId: "entp209-d29cd",
  storageBucket: "entp209-d29cd.appspot.com",
  messagingSenderId: "141999105775",
  appId: "1:141999105775:web:f654d57e95a2be2ef21d1a",
  measurementId: "G-1Z24ZHKQGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Export the auth object so it can be used in other files
export { auth };
