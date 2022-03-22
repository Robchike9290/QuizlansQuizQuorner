import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
import styled from 'styled-components';

const App = () => {
  const [docData, setDocData] = useState(null);


  useEffect(() => {
    getData();
  }, []);

  const getData = () => {

  };

  const report = () => {

  };

  const upvote = () => {
    axios.post('http://localhost:4444/upvote')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const downvote = () => {

  };

  const addQuiz = () => {

  };

  const search = () => {

  };

  return (
    <Router>
      <Button onClick={upvote}>Upvote</Button>
      {docData ? <div></div> : null}
      <div>
        <NavBar>
          <NavBarHeading>
            <Link to='/'>Landing Page</Link>
          </NavBarHeading>
          <NavBarHeading>
            <Link to='/home'>Home</Link>
          </NavBarHeading>
          <NavBarHeading>
            <Link to='/user'>User</Link>
          </NavBarHeading>
          <NavBarHeading>
            <Link to='/createquiz'>Create Quiz</Link>
          </NavBarHeading>
          <NavBarHeading>
            <Link to='/takequiz'>Take Quiz</Link>
          </NavBarHeading>
          <NavBarHeading>
            <Link to='/login'>Login</Link>
          </NavBarHeading>
          <NavBarForm>
            <input></input>
            <button>Search For a Quiz!</button>
          </NavBarForm>
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
            <Login />
          </Route>
        </Switch>
        {docData ? <h1>
          Hello {docData.quizName}
        </h1> : null}
        <Button variant="contained">this is a material UI button</Button>
      </div>
    </Router>
  );
};

export default hot(App);

const NavBarHeading = styled.span`
  background-color: var(--blue);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
`

const NavBarForm = styled.form`
  background-color: var(--blue);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
`

const NavBar = styled.div`
  background-color: var(--yellow);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  display: flex;
  justify-content: space-between;
`