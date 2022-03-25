import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { exampleQuizzes } from './../../../mockData/exampleQuizzes.js';
import { Button } from '@mui/material';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--background-color);
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

const BigDiv = styled.div`
  margin: var(--standard-margin);
  justify-content: center;
  font-size: x-large;
`;

const Results = ({
  score,
  changeStatusForward,
  changeStatusBackward,
  quiz,
  allQuizzes,
}) => {
  const getQuiz = () => {
    for (let i = 0; i < allQuizzes.length; i++) {
      if (allQuizzes[i].quizName === quiz) {
        console.log('QUIZ FOUND HERE IS THE OBJ', allQuizzes[i]);
        setSelectedQuiz(allQuizzes[i]);
      }
    }
  };

  return (
    <Container>
      <Header>Quiz Results</Header>
      <Body>
        <BigDiv>{score} / 10</BigDiv>
        <div></div>
      </Body>
      <Footer>
        <span>
          <FloatLeft>
            <Button
              style={{
                borderRadius: 'var(--standard-border-radius)',
                backgroundColor: 'var(--accent-color)',
                color: 'black',
              }}
              variant='contained'
              onClick={changeStatusForward}
            >
              Retake quiz
            </Button>
          </FloatLeft>
          <Button
            style={{
              borderRadius: 'var(--standard-border-radius)',
              backgroundColor: 'var(--accent-color)',
              color: 'black',
            }}
            variant='contained'
          >
            Report Quiz
          </Button>
          <FloatRight>
            <Button
              style={{
                borderRadius: 'var(--standard-border-radius)',
                backgroundColor: 'var(--accent-color)',
                color: 'black',
              }}
              variant='contained'
              onClick={() =>
                (window.location.href = 'http://localhost:8080/#/home')
              }
            >
              Exit
            </Button>
          </FloatRight>
        </span>
      </Footer>
    </Container>
  );
};

export default Results;
