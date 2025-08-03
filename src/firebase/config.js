// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW1lOm7QpmJnCYK8qfPN4gpNOjR4WxNvs",
  authDomain: "journal-app-6901a.firebaseapp.com",
  projectId: "journal-app-6901a",
  storageBucket: "journal-app-6901a.firebasestorage.app",
  messagingSenderId: "959523590860",
  appId: "1:959523590860:web:84e804be7c373e26e86869",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
