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

const Start = ({ quiz, pageStatus }) => {

 if (!quiz) {
  // get all quiz data from db
  // use that quiz data to populate the feed
  return (
    <Container>
    <Header>Start</Header>
    <Body>
      <h2>select a quiz</h2>
      <div>
        map over quiz data and render a feed of quizzes here for the user to select
      </div>
    </Body>
    <Footer>
      <span>
      <button>Return to homepage</button>
      <button>Next</button>
      </span>
    </Footer>
    </Container>
  )
 } else if (quiz) {
  // get selected quiz data from db
  //render the page that gives user the option to return home or start quiz
  return (
  <div>
    <p>* banner image here *</p>
    <h1>Quiz Name</h1>
    <p>Quiz author</p>
    <p>Quiz category</p>
    <br/>
    <br/>
    <Footer>
      <span>
      <button>Back</button>
      <button>Play!</button>
      </span>
    </Footer>
  </div>
  )
 }
};

export default Start;