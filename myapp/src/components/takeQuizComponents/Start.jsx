import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js'
import axios from 'axios';
import QuizFeedItem from './takeQuizSubcomponents/QuizFeedItem.jsx'

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--yellow);
  text-align: center;
  // justify-content: center; //wont allow me to center any other way, but justify also shrinks content
  margin: var(--standard-margin);
  display: grid;
  flex-direction: row;
  grid-template-rows: 20% 70% 10%;
`;

const Header = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  display: grid;
  flex-direction: row;
  // width: 1000px; //fixed width until I can figure out issue with justify-content
  margin: var(--standard-margin);
`;

const Body = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  display: grid;
  flex-direction: row;
  height: 500px; //fixed until later
  margin: var(--standard-margin);
`;

const Footer = styled.div`
  border-radius: var(--standard-border-radius);
  display: grid;
  flex-direction: row;
  margin: var(--standard-margin);
  margin-top: 30px; //necessary until I fix the quiz body extending into the footer
`;

<<<<<<< HEAD
const Start = ({ allQuizzes, quiz, quizSelected, changeStatusForward, changeStatusBackward, chooseQuiz, chosenQuiz }) => {
=======
const Button = styled.button`
  border-radius: var(--standard-border-radius);
  height: 30px;
  margin: var(--standard-margin);
  background-color: var(--purple);
  border: none;
  //add click styling
`;

const Start = ({ allQuizzes, quiz, quizSelected, changeStatusForward, changeStatusBackward, chooseQuiz, chosenQuiz, imFeelingLucky }) => {
>>>>>>> 499616d178f2b02b84a51bc0f4a24a3799b81e8f

 if (!quizSelected) {
  // get all quiz data from db
  // use that quiz data to populate the feed
  return (
    <Container>
    <Header>Start</Header>
    <Body>
      <h2>Select a quiz to start playing!</h2>
<<<<<<< HEAD
=======
      <Button onClick={imFeelingLucky}>I'm feeling lucky</Button>
>>>>>>> 499616d178f2b02b84a51bc0f4a24a3799b81e8f
      <div>
      {allQuizzes.map((quiz, idx) => {
          return <QuizFeedItem quiz={quiz} changeStatusForward={changeStatusForward} chooseQuiz={chooseQuiz} key={idx}/>
        })}
      </div>
<<<<<<< HEAD
      <div>{console.log('QUIZZES, DO THEY EXIST?', allQuizzes)}</div>
=======
>>>>>>> 499616d178f2b02b84a51bc0f4a24a3799b81e8f
    </Body>
    <Footer>
      <span>
      <button onClick={chosenQuiz}>Next</button>
      </span>
    </Footer>
    </Container>
  )
 } else if (quizSelected) {
  // get selected quiz data from db
  //render the page that gives user the option to return home or start quiz
  return (
  <div>
    <br/>
    <br/>
    <p>You've selected:</p>
    <h1>{quiz}</h1>
    {/* <p>Quiz author</p>
    <p>Quiz category</p> */}
    <Footer>
      <span>
<<<<<<< HEAD
      <button onClick={changeStatusBackward}>Back</button>
      <button onClick={changeStatusForward}>Play!</button>
=======
      <button onClick={changeStatusBackward}>Select another Quiz</button>
      <button onClick={changeStatusForward}>Play this one!</button>
>>>>>>> 499616d178f2b02b84a51bc0f4a24a3799b81e8f
      </span>
    </Footer>
  </div>
  )
 }
};

export default Start;