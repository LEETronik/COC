// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDstv-9UHv57LD6SXh-C1nEA9SWtCFigns",
  authDomain: "clashofcoders-af0de.firebaseapp.com",
  projectId: "clashofcoders-af0de",
  storageBucket: "clashofcoders-af0de.appspot.com",
  messagingSenderId: "656219752398",
  appId: "1:656219752398:web:ffb0fdd9c0421f2ca1cd9f",
  measurementId: "G-X478ZDD0X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Authentication functions
export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signup(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export function onAuthStateChanged(callback) {
  return onAuthStateChanged(auth, callback);
}