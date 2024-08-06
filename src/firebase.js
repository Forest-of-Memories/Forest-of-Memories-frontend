// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNbuSs2qZ7RraAY_JiFweTDhclv_8K2bM",
  authDomain: "forest-of-memories.firebaseapp.com",
  projectId: "forest-of-memories",
  storageBucket: "forest-of-memories.appspot.com",
  messagingSenderId: "287709106963",
  appId: "1:287709106963:web:45128be9dd09456d7c40e6",
  measurementId: "G-Y2XES6E77S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
