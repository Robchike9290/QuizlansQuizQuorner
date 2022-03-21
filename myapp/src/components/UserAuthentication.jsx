import React, {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
import {
  getAuth,
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  signOut, createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase.js"
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../firebase.js";

const UserAuthentication = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  onAuthStateChanged(auth, (loggedInUser) => {
    setCurrentUser(loggedInUser);
  });

  const createEmailHandler = (event) => {
    setRegisterEmail(event.tartget.value);
  };

  const createPasswordHandler = (event) => {
    setRegisterPassword(event.target.value);
  };



  const registerUser = () => {
    const user = createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

  const LoginUser = () => {
    const user = signInWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

  // const logOut = () => {
  //   const signedOut = signOut(auth)
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   });
  // };




  return (
    <div>
      username/email/TBD
      <div>
        <input onChange={createEmailHandler}>email</input>
        <input onChange={createPasswordHandler}>password</input>
      </div>
      <div>
        <span>
          <button onClick={registerUser}>Create Account</button>
          <button onClick={LoginUser}>Login</button>
        </span>
      </div>
    </div>
  )
}

export default UserAuthentication;