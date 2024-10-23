// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fb973.firebaseapp.com",
  projectId: "mern-estate-fb973",
  storageBucket: "mern-estate-fb973.appspot.com",
  messagingSenderId: "503997748345",
  appId: "1:503997748345:web:48cda916a03a86331c30a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);