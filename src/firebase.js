// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration for your project
const firebaseConfig = {
  apiKey: "AIzaSyDYLSsm6RX_CmMdY3nyqKQ7GaG4Xm3JBlY", // Web API Key
  authDomain: "ju-health.firebaseapp.com", // Firebase Project ID + ".firebaseapp.com"
  projectId: "ju-health", // Your Firebase Project ID
  storageBucket: "ju-health.appspot.com", // Firebase Project ID + ".appspot.com"
  messagingSenderId: "464984615044", // Your Firebase Sender ID
  appId: "YOUR_APP_ID", // You'll get this from Firebase Console (app-specific)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth };
