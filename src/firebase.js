// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
//import 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5A8hZkzpJzrpV7I2Rjtg_D6aBHuTfq5Q",
  authDomain: "blutube-ecdd0.firebaseapp.com",
  projectId: "blutube-ecdd0",
  storageBucket: "blutube-ecdd0.appspot.com",
  messagingSenderId: "748547773049",
  appId: "1:748547773049:web:61013fea9d284caf1fbaa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

export { app as firebaseApp, auth as firebaseAuth, googleAuthProvider as provider };