// Import the Firebase libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUQQjO1vzPRUc0p6tW7VFWPldW7VpRN-I",
    authDomain: "drdoapplicationverification.firebaseapp.com",
    projectId: "drdoapplicationverification",
    storageBucket: "drdoapplicationverification.firebasestorage.app",
    messagingSenderId: "437694226672",
    appId: "1:437694226672:web:7f54943b04f5621690a235",
    measurementId: "G-Z33LCTFZ24"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
