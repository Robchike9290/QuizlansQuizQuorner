import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import Home from './components/Home.jsx';
import CreateQuiz from './components/CreateQuiz.jsx';
import LandingPage from './components/LandingPage.jsx';
import TakeQuiz from './components/TakeQuiz.jsx';
import User from './components/User.jsx';
import Login from './components/Login.jsx';
// import UserAuthentication from './components/UserAuthentication.jsx'

const App = () => {
  return (
    <Router>
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
        {/*<h1>
          Hello {name}
        </h1>
        <Button variant="contained">this is a material UI button</Button>*/}
      </div>
    </Router>
  );
};

export default hot(App);
