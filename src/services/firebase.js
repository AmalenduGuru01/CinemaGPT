// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "cinemagpt-abd30.firebaseapp.com",
  projectId: "cinemagpt-abd30",
  storageBucket: "cinemagpt-abd30.appspot.com",
  messagingSenderId: "714596643761",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-V653P6F7V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
