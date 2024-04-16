// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0LeP8ECqoWNurtuKCF_RCere6vSx0Cu0",
  authDomain: "quick-task-419918.firebaseapp.com",
  projectId: "quick-task-419918",
  storageBucket: "quick-task-419918.appspot.com",
  messagingSenderId: "126875154076",
  appId: "1:126875154076:web:ccf7d191c79f479dbbdf59",
  measurementId: "G-VR1KLCHZ0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}
