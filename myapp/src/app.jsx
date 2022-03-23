import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import Home from './components/Home.jsx';
import CreateQuiz from './components/CreateQuiz.jsx';
import LandingPage from './components/LandingPage.jsx';
import TakeQuiz from './components/TakeQuiz.jsx';
import User from './components/User.jsx';
import Login from './components/Login.jsx';
import { app, auth } from "./index.js";
import axios from "axios";
import logo from "./images/QuestionMarkQarl - NoTitle.png";
import styled from 'styled-components';

const App = () => {
  const [docData, setDocData] = useState(null);
  const isOnLandingPage = (window.location.pathname == '/landingpage')
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [currentSearch, setCurrentSearch] = useState('');
  const [allQuizzes, setAllQuizzes] = useState([]);

  const stringifiedUser = JSON.stringify(currentUser);
  const testOptions = [
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 3, value: 3},
    {label: 4, value: 4}
  ]

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://52.90.8.77:4444/quizzes')
      .then((response) => {
        console.log('Here are your quizzes: ', response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const report = () => {
    axios.post('http://52.90.8.77:4444/reportQuiz')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const upvote = () => {
    axios.post('http://52.90.8.77:4444/upvote')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const downvote = () => {
    axios.post('http://52.90.8.77:4444/downvote')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const addQuiz = () => {
    axios.post('http://52.90.8.77:4444/addQuiz')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const removeQuiz = () => {
    axios.post('http://52.90.8.77:4444/removeQuiz')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const handleSearchChange = (e) => {
    setCurrentSearch(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('search button clicked');
  }

  const getUser = () => {
    axios.get('http://52.90.8.77:4444/user')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const addFriend = () => {
    axios.post('http://52.90.8.77:4444/addFriend')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const removeFriend = () => {
    axios.post('http://52.90.8.77:4444/removeFriend')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  return (
    <Router>
      {/* <Button onClick={upvote}>Upvote</Button>
      {docData ? <div></div> : null} */}
      <div>
        <NavBar>
          <NavBarLogo alt="Page logo" src={logo}>
          </NavBarLogo>
          <NavBarTitle>Quizlin's Quiz Quorner</NavBarTitle>
          {stringifiedUser === '{ALWAYSFALSE}' && <NavBarHeading>
            <Link to='/'></Link>
          </NavBarHeading>}
          {stringifiedUser !== '{}' && <NavBarHeading>
            <Link to='/home'>Home</Link>
          </NavBarHeading>}
          {stringifiedUser !== '{}' && <NavBarHeading>
            <Link to='/user'>User</Link>
          </NavBarHeading>}
          {stringifiedUser !== '{}' && <NavBarHeading>
            <Link to='/createquiz'>Create Quiz</Link>
          </NavBarHeading>}
          {stringifiedUser !== '{}' && <NavBarHeading>
            <Link to='/takequiz'>Take Quiz</Link>
          </NavBarHeading>}
          {stringifiedUser === '{}' && <NavBarHeading>
            <Link to='/login'>Login</Link>
          </NavBarHeading>}
          {stringifiedUser !== '{}' && <NavBarForm>
            {/* <input onChange={handleSearchChange}></input>
            <button onClick={handleSearchSubmit}>Search For a Quiz!</button> */}
            <Select options={testOptions}></Select>
          </NavBarForm>}
        </NavBar>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/user'>
            <User />
          </Route>
          <Route exact path='/takequiz'>
            <TakeQuiz />
          </Route>
          <Route exact path='/createquiz'>
            <CreateQuiz />
          </Route>
          <Route exact path='/login'>
            <Login registerEmail={registerEmail} setRegisterEmail={setRegisterEmail} registerPassword={registerPassword} setRegisterPassword={setRegisterPassword} currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
        {/* {docData ? <h1>
          Hello {docData.quizName}
        </h1> : null}
        <Button variant="contained">this is a material UI button</Button> */}
      </div>
    </Router>
  );
};

export default hot(App);

const NavBarTitle = styled.span`{
  background-color: var(--blue);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  font-family: arial;
  font-size: 48px;
}`;

const NavBarLogo = styled.img`
  background-color: var(--blue);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
`;

const NavBarHeading = styled.span`
  background-color: var(--blue);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  font-family: arial;
  font-size: 24px;
`;

const NavBarForm = styled.form`
  background-color: var(--blue);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
`;

const NavBar = styled.span`
  background-color: var(--yellow);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;