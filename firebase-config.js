// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvvh0awqbi8tl33I1rj3oNHgIU47lQQV0",
  authDomain: "twrnc-auth.firebaseapp.com",
  projectId: "twrnc-auth",
  storageBucket: "twrnc-auth.appspot.com",
  messagingSenderId: "116053931507",
  appId: "1:116053931507:web:e7675e0248e7db36734e86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export const auth = getAuth(app)
