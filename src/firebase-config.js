// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-jsxNcSXKuhNx8K1qbP5wO8nQSYJiNB0",
  authDomain: "waitlist-rochagpt.firebaseapp.com",
  projectId: "waitlist-rochagpt",
  storageBucket: "waitlist-rochagpt.appspot.com",
  messagingSenderId: "949982161526",
  appId: "1:949982161526:web:9016191175a26393ec8d57",
  measurementId: "G-6S59EYNDCD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
