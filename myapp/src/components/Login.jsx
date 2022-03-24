import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
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
import styled from 'styled-components';
// import firebaseConfig from "../index.js";

const Login = ({
  registerEmail,
  setRegisterEmail,
  registerPassword,
  setRegisterPassword,
  currentUser,
  setCurrentUser,
  userName,
  setUserName
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

  const createUserHandler = (event) => {
    setUserName(event.target.value);
  }

  const registerUser = () => {
    axios.post('http://52.90.8.77:4444/addUser', {userName: userName, email: registerEmail})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

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
    <FormBox>
      <h1>Please enter in your username, email, and password.</h1>
      <h2>If you do not have an account yet, sign up in this form with the same credentials!</h2>
      <h3>*All user emails must be in a valid format, and all user passwords must be at least six characters in length*</h3>
      <div>
        <FormLine>
          <label>Username:</label>
          <FormInput type='text' required={true} onChange={createUserHandler}/>
        </FormLine>
        <FormLine>
          <label>Email:</label>
          <FormInput type='email' required={true} onChange={createEmailHandler} />
        </FormLine>
        <FormLine>
          <label>Password:</label>
          <FormInput type='password' required={true} onChange={createPasswordHandler}/>
        </FormLine>
      </div>
      <FormLine>
        <span>
          <StyledButton onClick={registerUser}>Create Account</StyledButton>
          <StyledButton onClick={LoginUser} >Login</StyledButton>
        </span>
      </FormLine>
    </FormBox>
  );
};

export default Login;

const FormBox = styled.form`
  background-color: var(--blue);
  color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  font-size: 36px;
  width: 20%;
  margin-top: 50%
  margin-left: auto;
  margin-right: auto;
`

const StyledButton = styled.button`
  background-color: var(--purple);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  border-width: 0;
  box-shadow: var(--standard-shadow);
  margin-bottom: 20px;
  width: 25%;
  font-size: 24px;
`

const FormLine = styled.div`
  background-color: var(--blue);
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 24px;
`

const FormInput = styled.input`
  float: right;
`

const FormLabel = styled.input`
  float: left;
`