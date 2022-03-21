import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import Home from './components/Home.jsx'
import CreateQuiz from './components/CreateQuiz.jsx'
import LandingPage from './components/LandingPage.jsx'
import TakeQuiz from './components/TakeQuiz.jsx'
import User from './components/User.jsx'
import UserAuthentication from '../src/components/UserAuthentication.jsx'

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (

      <Router>
        <div>
          <div>NavBar</div>
          <Switch>
            <Route>
              <LandingPage />
            </Route>
            <Route>
              <Home />
            </Route>
            <Route>
              <User />
            </Route>
            <Route>
              <TakeQuiz />
            </Route>
            <Route>
              <CreateQuiz />
            </Route>
          </Switch>
        {/*<h1>
          Hello {name}
        </h1>
        <Button variant="contained">this is a material UI button</Button>*/}
        </div>
      </Router>
    );
  }
}

export default hot(App);