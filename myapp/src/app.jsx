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
import { app, auth } from './index.js';
import axios from 'axios';

const App = () => {
  const [docData, setDocData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {};

  const report = () => {};

  const upvote = () => {
    axios
      .post('http://localhost:4444/upvote')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const downvote = () => {};

  const addQuiz = () => {};

  const search = () => {};

  return (
    <Router>
      {/*<Button onClick={upvote}>Upvote</Button>*/}
      {docData ? <div></div> : null}
      <div>
        <ul>
          <li>
            <Link to='/'>Landing Page</Link>
          </li>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/user'>User</Link>
          </li>
          <li>
            <Link to='/createquiz'>Create Quiz</Link>
          </li>
          <li>
            <Link to='/takequiz'>Take Quiz</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
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
        {docData ? <h1>Hello {docData.quizName}</h1> : null}
        {/*<Button variant="contained">this is a material UI button</Button>*/}
      </div>
    </Router>
  );
};

export default hot(App);
