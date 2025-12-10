// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNDm-VoBOlzDWgVmSLXPcGcFONiW-2ZUg",
  authDomain: "react-tut-c9771.firebaseapp.com",
  projectId: "react-tut-c9771",
  storageBucket: "react-tut-c9771.firebasestorage.app",
  messagingSenderId: "797880514848",
  appId: "1:797880514848:web:a2141f6419840a6189ff45",
  measurementId: "G-W40KHB0GV0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
