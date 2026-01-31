import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAg6agQ3zWrp11PBUbZJBTEpKHmchkHNJc",
  authDomain: "resume-builder-6f272.firebaseapp.com",
  databaseURL: "https://resume-builder-6f272-default-rtdb.firebaseio.com",
  projectId: "resume-builder-6f272",
  storageBucket: "resume-builder-6f272.firebasestorage.app",
  messagingSenderId: "280565853205",
  appId: "1:280565853205:web:4446a2d6f47ceb95b2b21c",
  measurementId: "G-2CY2YELLML"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);