// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKXIYR1ceqpydEDx8MUqZvWkFSn45ElVw",
  authDomain: "gallery-dnd.firebaseapp.com",
  projectId: "gallery-dnd",
  storageBucket: "gallery-dnd.appspot.com",
  messagingSenderId: "573075112096",
  appId: "1:573075112096:web:0c4a618050dfd4662289c5",
  measurementId: "G-N4F1FR9NBY"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const analytics = getAnalytics(app);