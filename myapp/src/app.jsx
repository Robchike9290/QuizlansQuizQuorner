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
import { app, auth } from './index.js';
import axios from 'axios';
import logo from './images/QuestionMark.png';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';

const App = () => {
  const [docData, setDocData] = useState(null);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [currentSearch, setCurrentSearch] = useState('');
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(undefined);
  const [userName, setUserName] = useState('');
  const [fullQuizList, setFullQuizList] = useState([]);

  const stringifiedUser = JSON.stringify(currentUser);

  useEffect(() => {
    getData();
  }, []);

  const handleSearchSubmit = (opt) => {
    console.log("you've selected:", opt.label);
    window.location.href = 'http://localhost:8080/#/takequiz';
    setSelectedQuiz(opt.label);
  };

  const getData = () => {
    axios
      .get('http://52.90.8.77:4444/getAllQuizzes')
      .then((response) => {
        console.log('Here are your quizzes: ', response.data);
        const quizIds = [];
        for (let i = 0; i < response.data.length; i++) {
          let quiz = response.data[i];
          let newDropDownItem = { label: quiz.quizName, value: quiz.quizName };
          quizIds.push(newDropDownItem);
        }
        setAllQuizzes(quizIds);
        setFullQuizList(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logOut = () => {
    const signedOut = signOut(auth)
      .then((data) => {
        setCurrentUser({});
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const report = () => {
    axios
      .post('http://52.90.8.77:4444/reportQuiz')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const upvote = () => {
    axios
      .post('http://52.90.8.77:4444/upvote')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const downvote = () => {
    axios
      .post('http://52.90.8.77:4444/downvote')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addQuiz = () => {
    axios
      .post('http://52.90.8.77:4444/addQuiz')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeQuiz = () => {
    axios
      .post('http://52.90.8.77:4444/removeQuiz')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getUser = () => {
    axios
      .get('http://52.90.8.77:4444/user')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addFriend = () => {
    axios
      .post('http://52.90.8.77:4444/addFriend')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeFriend = () => {
    axios
      .post('http://52.90.8.77:4444/removeFriend')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Router>
      {/*<Button onClick={upvote}>Upvote</Button>*/}
      {docData ? <div></div> : null}
      <div>
        <NavBar>
          <NavBarLogo alt='Page logo' src={logo}></NavBarLogo>
          <NavBarTitle>Quizlin's Quiz Quorner</NavBarTitle>
          {stringifiedUser === '{ALWAYSFALSE}' && (
            <NavBarHeading>
              <Link style={linkStyle} to='/'></Link>
            </NavBarHeading>
          )}
          {stringifiedUser !== '{}' && (
            <NavBarHeading>
              <Link style={linkStyle} to='/home'>Home</Link>
            </NavBarHeading>
          )}
          {stringifiedUser !== '{}' && (
            <NavBarHeading>
              <Link style={linkStyle} to='/user'>User</Link>
            </NavBarHeading>
          )}
          {stringifiedUser !== '{}' && (
            <NavBarHeading>
              <Link style={linkStyle} to='/createquiz'>Create Quiz</Link>
            </NavBarHeading>
          )}
          {stringifiedUser !== '{}' && (
            <NavBarHeading>
              <Link
                style={linkStyle}
                to={{
                  pathname: '/takequiz',
                  state: { quizSelected: selectedQuiz },
                }}
              >
                Take Quiz
              </Link>
            </NavBarHeading>
          )}
          {stringifiedUser === '{}' && (
            <NavBarHeading>
              <Link style={linkStyle} to='/login'>Log In</Link>
            </NavBarHeading>
          )}
          {stringifiedUser !== '{}' && (
            <NavBarHeading>
              <Link style={linkStyle} to='/' onClick={logOut}>
                Log Out
              </Link>
            </NavBarHeading>
          )}
          {stringifiedUser !== '{}' && (
            <NavBarForm>
              <Select options={allQuizzes} onChange={handleSearchSubmit}>
                Search for a Quiz to Take!
              </Select>
            </NavBarForm>
          )}
        </NavBar>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/home'>
            <Home fullQuizList={fullQuizList} />
          </Route>
          <Route exact path='/user'>
            <User currentUser={currentUser} userName={userName}/>
          </Route>
          <Route exact path='/takequiz'>
            <TakeQuiz selectedQuiz={selectedQuiz} />
          </Route>
          <Route exact path='/createquiz'>
            <CreateQuiz />
          </Route>
          <Route exact path='/login'>
            <Login registerEmail={registerEmail} setRegisterEmail={setRegisterEmail} registerPassword={registerPassword} setRegisterPassword={setRegisterPassword} currentUser={currentUser} setCurrentUser={setCurrentUser} setUserName={setUserName} userName={userName}/>
          </Route>
        </Switch>
        {docData ? <h1>Hello {docData.quizName}</h1> : null}
        {/*<Button variant="contained">this is a material UI button</Button>*/}
      </div>
    </Router>
  );
};

export default hot(App);

const NavBarTitle = styled.span`
  background-color: var(--blue);
  color: var(--text-color);
  padding: var(--standard-padding);
  font-family: arial;
  font-size: 48px;
`;

const NavBarLogo = styled.img`
  background-color: var(--blue);
  color: var(--text-color);
  padding: var(--standard-padding);
`;

const NavBarHeading = styled.span`
  background-color: var(--blue);
  color: var(--text-color);
  padding: var(--standard-padding);
  font-family: arial;
  font-size: 24px;
`;

const NavBarForm = styled.form`
  background-color: var(--blue);
  color: var(--text-color);
  padding: var(--standard-padding);
`;

const NavBar = styled.span`
  background-color: var(--blue);
  color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const linkStyle = {
  'text-decoration': 'none',
  'color': '--var(--text-color)'
};