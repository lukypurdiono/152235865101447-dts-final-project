// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd0Dr6oWm0Zh1lzT4rLphgOREgVIgSnDc",
  authDomain: "foodies-88d43.firebaseapp.com",
  projectId: "foodies-88d43",
  storageBucket: "foodies-88d43.appspot.com",
  messagingSenderId: "650779981378",
  appId: "1:650779981378:web:9bf3ef4c95f04760c2dfdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response.user);
  } catch (error) {
    console.log(error);
    console.log(error.code);
    console.log(error.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
    console.log(error.code);
    console.log(error.message);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error);
  }
};

const exitApp = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  resetPassword,
  exitApp,
};
