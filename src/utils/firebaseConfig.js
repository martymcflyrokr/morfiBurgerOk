// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuD9fCPfD6tUZA2JmecaDCKWe_Waaj-P8",
  authDomain: "morfiburger-ok.firebaseapp.com",
  projectId: "morfiburger-ok",
  storageBucket: "morfiburger-ok.appspot.com",
  messagingSenderId: "419188169932",
  appId: "1:419188169932:web:025d6d2b78b33a9fa8b669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
const db = getFirestore(app)

export default db