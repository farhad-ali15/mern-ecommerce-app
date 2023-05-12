// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaPmeJOP2FlYTvUlprsk53Hz3MUlbh9lM",
  authDomain: "ecommerce-shop-data.firebaseapp.com",
  projectId: "ecommerce-shop-data",
  storageBucket: "ecommerce-shop-data.appspot.com",
  messagingSenderId: "361841008483",
  appId: "1:361841008483:web:23c1401dd760f8b51ebd56",
  measurementId: "G-6391EPH6T6",
};

// Initialize Firebase and storage
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
