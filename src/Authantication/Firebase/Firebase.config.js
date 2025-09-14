// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDVTnxjtSpMhfzTXfzZL-mcUS69BgGU8E",
    authDomain: "ass-again-10.firebaseapp.com",
    projectId: "ass-again-10",
    storageBucket: "ass-again-10.firebasestorage.app",
    messagingSenderId: "865755561319",
    appId: "1:865755561319:web:7abe3167c5c07134e1c3c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;