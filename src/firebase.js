// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx3Y1rdRUXKigGTbMyzkRrnrvDIV_AoUY",
  authDomain: "netflix-clone-5adec.firebaseapp.com",
  projectId: "netflix-clone-5adec",
  storageBucket: "netflix-clone-5adec.firebasestorage.app",
  messagingSenderId: "1086909986704",
  appId: "1:1086909986704:web:0781139d3c53744dfe2515",
  measurementId: "G-FEKYX34H0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
