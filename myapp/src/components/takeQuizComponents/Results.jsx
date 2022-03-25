import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js'


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
<<<<<<< HEAD
   //fixed width until I can figure out issue with justify-content
=======
>>>>>>> 499616d178f2b02b84a51bc0f4a24a3799b81e8f
  margin: var(--standard-margin);
  font-size: large;
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

const FloatRight = styled.div`
  margin: var(--standard-margin);
  float: right;
`;

const FloatLeft = styled.div`
  margin: var(--standard-margin);
  float: left;
`;

<<<<<<< HEAD
const Results = ({ score, changeStatusForward, changeStatusBackward }) => {
=======
const BigDiv = styled.div`
  margin: var(--standard-margin);
  justify-content: center;
  font-size: x-large;
`;

const Results = ({ score, changeStatusForward, changeStatusBackward, quiz, allQuizzes }) => {
>>>>>>> 499616d178f2b02b84a51bc0f4a24a3799b81e8f

  return (
    <Container>
    <Header>Quiz Results</Header>
<<<<<<< HEAD
    <Body> / 10</Body>
    <Footer>
      <span>
        <FloatLeft>
          <button>Retake quiz</button>
        </FloatLeft>
        <FloatRight>
          <button>Exit</button>
=======
    <Body>
      <BigDiv>{score} / 10</BigDiv>
      <div></div>
      </Body>
    <Footer>
      <span>
        <FloatLeft>
          <button onClick={changeStatusForward}>Retake quiz</button>
        </FloatLeft>
        <button>Report Quiz</button>
        <FloatRight>
          <button onClick={() => window.location.href = 'http://localhost:8080/#/home'}>Exit</button>
>>>>>>> 499616d178f2b02b84a51bc0f4a24a3799b81e8f
        </FloatRight>
      </span>
    </Footer>
    </Container>
  );
};

export default Results;