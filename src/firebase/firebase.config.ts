// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqFBm1NL3pOY-9hZ6gEPt7Bpv0Q11gzMk",
  authDomain: "time-sync-tracker.firebaseapp.com",
  projectId: "time-sync-tracker",
  storageBucket: "time-sync-tracker.appspot.com",
  messagingSenderId: "487941280755",
  appId: "1:487941280755:web:fc4d98712d369d01c7f886",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
