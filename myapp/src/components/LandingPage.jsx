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
    <FirstNesting>
      <StyledH1 id='headline'>
        The #1 place for all of your quiz needs. Choose between pre-built quiz
        or a custom quiz. Choose to go solo or challenge your friends.
        Definitely the best way to improve your happy hour trivia odds.
      </StyledH1>
      <div id='intro1'>
        <InlineDuo>
          <LeftPhoto>
            <img
              alt='Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*'
              src={testimonialPhoto1}
            ></img>
          </LeftPhoto>
        </InlineDuo>
        <InlineDuo>
          <RightText>
            Create a quiz to study for your next midterm exam
          </RightText>
        </InlineDuo>
      </div>
      <div id='intro2'>
        <InlineDuo>
          <LeftText>Take a pre-built quiz to sharpen your skills.</LeftText>
        </InlineDuo>
        <InlineDuo>
          <RightPhoto>
            <img
              alt='Take quiz page screenshot *INSERT TAKE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*'
              src={testimonialPhoto1}
            ></img>
          </RightPhoto>
        </InlineDuo>
      </div>
      <div id='rhetoricalIntro3'>
        <InlineDuo>
          <LeftPhoto>
            <img
              alt='Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE. OR...REPLACE WITH ANOTHER FUNCTION?*'
              src={testimonialPhoto1}
            ></img>
          </LeftPhoto>
        </InlineDuo>
        <InlineDuo>
          <RightText>
            Enjoy a personally-tailored quizzing home page, made just for you!
          </RightText>
        </InlineDuo>
      </div>
      <div id='testimonials'>
        <InlineTrio>
          <center>
            <img alt='Testimonial stock photo #1' src={testimonialPhoto1}></img>
          </center>
          <Testimonial>"Steve Quizlan changed my life!"</Testimonial>
        </InlineTrio>
        <InlineTrio>
          <center>
            <img alt='Testimonial stock photo #2' src={testimonialPhoto2}></img>
          </center>
          <Testimonial>
            "I never knew taking quizzes could be so fun!"
          </Testimonial>
        </InlineTrio>
        <InlineTrio>
          <center>
            <img alt='Testimonial stock photo #3' src={testimonialPhoto3}></img>
          </center>
          <Testimonial>
            "After two weeks my quiz scores went from 55% to 85%. Thanks,
            Steve!"
          </Testimonial>
        </InlineTrio>
      </div>
      <StyledH2 id='getStartedHeading'>How to Get Started</StyledH2>
      <StyledH3 id='getStartedInfo1'>Step One: Sign Up for an Account</StyledH3>
      <StyledH3 id='getStartedInfo'>Step Two: Start Taking Quizzes!</StyledH3>
      <Link to='/login'>
        <center>
          <StyledButton id='signup'>Sign Up Now!</StyledButton>
        </center>
      </Link>
    </FirstNesting>
  );
};

const FirstNesting = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  width: 90%;
  margin: auto;
`;

const LeftText = styled.div`
  background-color: var(--purple);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  margin-left: 30%;
  text-align: left;
  float: left;
`;

const LeftPhoto = styled.div`
  text-color: var(--text-color);
  margin: var(--standard-margin);
  padding: var(--standard-padding);
  font-family: arial;
  font-size: 48px;
`;

const RightText = styled.div`
  background-color: var(--purple);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
`;

const RightPhoto = styled.div`
  margin: var(--standard-margin);
  padding: var(--standard-padding);
  margin-right: 30%;
  float: right;
`;

const InlineDuo = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 50%;
`;

const InlineTrio = styled.span`
  display: inline-block;
  width: 33%;
  margin: auto;
  margin-top: 50px;
`;

const StyledButton = styled.button`
  background-color: var(--purple);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  border-width: 0;
  box-shadow: var(--standard-shadow);
  margin-bottom: 20px;
  width: 25%;
  font-size: 24px;
`;

const StyledH1 = styled.h1`
  background-color: var(--purple);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

const StyledH2 = styled.h2`
  background-color: var(--purple);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

const StyledH3 = styled.h3`
  background-color: var(--purple);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

const Testimonial = styled.div`
  background-color: var(--purple);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const linkStyle = {
  'text-decoration': 'none',
};

