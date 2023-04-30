// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_4B6RaZferZhpCNO7ZPmFtGC8VoedG8Y",
  authDomain: "the-dragon-news-a3e6e.firebaseapp.com",
  projectId: "the-dragon-news-a3e6e",
  storageBucket: "the-dragon-news-a3e6e.appspot.com",
  messagingSenderId: "727438600373",
  appId: "1:727438600373:web:8a0a55e37cf4765c29b6fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;