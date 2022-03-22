import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import './styles.css';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword
} from "firebase/auth";
import firebaseConfig from "../config.js";
import exampleQuizzes from "../mockData/exampleQuizzes.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

export { app, auth };