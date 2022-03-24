import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import {
  getAuth,
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../index.js';
import { getFirestore } from 'firebase/firestore';
// import firebaseConfig from "../index.js";

const Login = ({
  registerEmail,
  setRegisterEmail,
  registerPassword,
  setRegisterPassword,
  currentUser,
  setCurrentUser,
}) => {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [currentUser, setCurrentUser] = useState({});

  onAuthStateChanged(auth, (loggedInUser) => {
    setCurrentUser(loggedInUser);
  });

  const createEmailHandler = (event) => {
    setRegisterEmail(event.target.value);
  };

  const createPasswordHandler = (event) => {
    setRegisterPassword(event.target.value);
  };

  const registerUser = () => {
    const user = createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    )
      .then((user) => {
        console.log(user);
        document.location.href = 'http://localhost:8080/#/home';
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const LoginUser = () => {
    const user = signInWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    )
      .then((user) => {
        console.log(user);
        document.location.href = 'http://localhost:8080/#/home';
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      username/email/TBD
      <div>
        email
        <input type='email' required={true} onChange={createEmailHandler} />
        password
        <input
          type='password'
          required={true}
          onChange={createPasswordHandler}
        />
      </div>
      <div>
        <span>
          <button onClick={registerUser}>Create Account</button>
          <button onClick={LoginUser}>Login</button>
        </span>
      </div>
    </div>
  );
};

export default Login;
