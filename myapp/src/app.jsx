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
import { onAuthStateChanged } from 'firebase/auth';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Switch as SwitchMode } from '@mui/material/';

const App = () => {
  const [docData, setDocData] = useState(null);
  const [registerEmail, setRegisterEmail] = useState('su@gmail.com');
  const [registerPassword, setRegisterPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [currentSearch, setCurrentSearch] = useState('');
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(undefined);
  const [userName, setUserName] = useState('superuser');
  const [fullQuizList, setFullQuizList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [friends, setFriends] = useState([]);
  const [quizHistory, setQuizHistory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  onAuthStateChanged(auth, (loggedInUser) => {
    setCurrentUser(loggedInUser);
  });

  useEffect(() => {
    getData();
  }, [currentUser]);

  const switchTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  const handleSearchSubmit = (opt) => {
    window.location.href = 'http://localhost:8080/#/takequiz';
    setSelectedQuiz(opt.label);
  };

  const getData = () => {
    axios
      .get('http://52.90.8.77:4444/getAllQuizzes')
      .then((response) => {
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
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const report = () => {
    axios
      .post('http://52.90.8.77:4444/reportQuiz')
      .then((response) => {
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addQuiz = () => {
    axios
      .post('http://52.90.8.77:4444/addQuiz')
      .then((response) => {
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeQuiz = () => {
    axios
      .post('http://52.90.8.77:4444/removeQuiz')
      .then((response) => {
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getUser = (userEmail) => {
    const email = userEmail;
    axios
      .get(`http://52.90.8.77:4444/user/${email}`)
      .then((response) => {
        setUserName(response.data[0].userName);
        setFriends(response.data[0].friends);
        setQuizHistory(response.data[0].quizHistory);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addFriend = () => {
    axios
      .post('http://52.90.8.77:4444/addFriend')
      .then((response) => {
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeFriend = () => {
    axios
      .post('http://52.90.8.77:4444/removeFriend')
      .then((response) => {
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Router>
      {docData ? <div></div> : null}
      <div>
        <NavBar>
          <NavBarLogo alt='Page logo' src={logo}></NavBarLogo>
          <NavBarTitle>Quizlin's Quiz Quorner</NavBarTitle>
          {currentUser === '{ALWAYSFALSE}' && (
            <NavBarHeading>
              <Link style={linkStyle} to='/'></Link>
            </NavBarHeading>
          )}
          {currentUser !== null && (
            <NavBarHeading>
              <Link style={linkStyle} to='/home'>
                Home
              </Link>
            </NavBarHeading>
          )}
          {currentUser !== null && (
            <NavBarHeading>
              <Link style={linkStyle} to='/user'>
                User
              </Link>
            </NavBarHeading>
          )}
          {currentUser !== null && (
            <NavBarHeading>
              <Link style={linkStyle} to='/createquiz'>
                Create Quiz
              </Link>
            </NavBarHeading>
          )}
          {currentUser !== null && (
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
          {currentUser === null && (
            <NavBarHeading>
              <Link style={linkStyle} to='/login'>
                Log In
              </Link>
            </NavBarHeading>
          )}
          {currentUser !== null && (
            <NavBarHeading>
              <Link style={linkStyle} to='/' onClick={logOut}>
                Log Out
              </Link>
            </NavBarHeading>
          )}
          {currentUser !== null && (
            <NavBarForm>
              <Select style="color: black" options={allQuizzes} onChange={handleSearchSubmit}>
                Search for a Quiz to Take!
              </Select>
            </NavBarForm>
          )}
          <SwitchMode onClick={switchTheme} />
        </NavBar>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/home'>
            <Home
              fullQuizList={fullQuizList}
              selectedQuiz={selectedQuiz}
              setSelectedQuiz={setSelectedQuiz}
              friends={friends}
              setFullQuizList={setFullQuizList}
            />
          </Route>
          <Route exact path='/user'>
            <User currentUser={currentUser} userName={userName} registerEmail={registerEmail} isAdmin={isAdmin} getUser={getUser} friends={friends} setFriends={setFriends} removeQuiz={removeQuiz} quizHistory={quizHistory}/>
          </Route>
          <Route exact path='/takequiz'>
            <TakeQuiz selectedQuiz={selectedQuiz} report={report}/>
          </Route>
          <Route exact path='/createquiz'>
            <CreateQuiz userName={userName} />
          </Route>
          <Route exact path='/login'>
            <Login
              registerEmail={registerEmail}
              setRegisterEmail={setRegisterEmail}
              registerPassword={registerPassword}
              setRegisterPassword={setRegisterPassword}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              setUserName={setUserName}
              userName={userName}
              getUser={getUser}
            />
          </Route>
        </Switch>
        {docData ? <h1>Hello {docData.quizName}</h1> : null}
      </div>
    </Router>
  );
};

export default hot(App);

const NavBarTitle = styled.span`
  background-color: var(--blue);
  color: var(--text-color);
  padding: var(--standard-padding);
  font-size: 60px;
  font-family: 'Tourney', cursive;
  font-weight: 400;
`;

const NavBarLogo = styled.img`
  background-color: var(--blue);
  color: var(--text-color);
  padding: var(--standard-padding);
  height: 100px;
`;

const NavBarHeading = styled.span`
  background-color: var(--blue);
  color: var(--text-color);
  padding: var(--standard-padding);
  font-family: var(--font-family)
  font-size: 32px;
`;

const NavBarForm = styled.form`
  background-color: var(--blue);
  color: black;
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
  'color': 'var(--text-color)',
};