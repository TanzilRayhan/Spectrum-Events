// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_YnWZrhoubtq7LXpDXYvfMWzgvqqcJqU",
  authDomain: "spectrum-events.firebaseapp.com",
  projectId: "spectrum-events",
  storageBucket: "spectrum-events.appspot.com",
  messagingSenderId: "751343398887",
  appId: "1:751343398887:web:c7060ab8a2dbee6b2cd742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;