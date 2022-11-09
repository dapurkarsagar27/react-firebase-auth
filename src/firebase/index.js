import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAL1jfllqo0cf1ftp1deFrg2OIu8CfNEuo",
  authDomain: "react-login-auth-75b4b.firebaseapp.com",
  projectId: "react-login-auth-75b4b",
  storageBucket: "react-login-auth-75b4b.appspot.com",
  messagingSenderId: "516421840510",
  appId: "1:516421840510:web:6d5c78d87169132e49b22f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);