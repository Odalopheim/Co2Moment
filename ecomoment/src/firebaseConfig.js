// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSy...[YOUR_ACTUAL_API_KEY]", // Get this from Firebase Console > Project settings > Your apps
  authDomain: "ecomomentanalyse.firebaseapp.com",
  projectId: "ecomomentanalyse",
  storageBucket: "ecomomentanalyse.appspot.com",
  messagingSenderId: "451787102135",
  appId: "1:451787102135:web: [YOUR_ACTUAL_APP_ID]", // Get this from Firebase Console > Project settings > Your apps
  databaseURL: "https://ecomomentanalyse.firebaseio.com" // Only if you plan to use Firebase Realtime Database
  // measurementId: "G-[YOUR_ACTUAL_MEASUREMENT_ID]" // Include if using Google Analytics for Firebase
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
