import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import './styles.css';
// Firebase imports
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../config.js';
import { auth } from '../config.js';

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:8080")

// const loginEmailPassword = async () => {
//   const loginEmail = txtEmail.value;
//   const loginPassword = txtPassword.value;

//   const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
//   console.log(userCredential.user);
// }

const db = getFirestore();
// const usersCol = collection(db, 'users');
// const snapshot = await getDocs(usersCol);

// Detect user login
onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log('Logged in!');
  } else {
    console.log('User not found...');
  }
});

var mountNode = document.getElementById('app');
ReactDOM.render(<App name='Jane' />, mountNode);
