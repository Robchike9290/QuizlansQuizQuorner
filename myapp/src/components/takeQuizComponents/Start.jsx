import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { exampleQuizzes } from './../../../mockData/exampleQuizzes.js';
import axios from 'axios';
import QuizFeedItem from './takeQuizSubcomponents/QuizFeedItem.jsx';
import { Button } from '@mui/material';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--accent-color);
  text-align: center;
  justify-content: center;
  margin: var(--standard-margin);
  display: grid;
  flex-direction: row;
  grid-template-rows: 20% 70% 10%;
  margin-left: 5%;
  margin-right: 5%;
`;

const Header = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  display: grid;
  flex-direction: row;
  width: 1000px;
  margin: var(--standard-margin);
  box-shadow: inset 4px 2px 10px rgba(0, 0, 0, 0.4);
`;

const Body = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  display: grid;
  flex-direction: row;
  height: 550px;
  margin: var(--standard-margin);
  maxheight: 500px;
  overflow: scroll;
  margin-top: 25px;
  margin-bottom: -30px;
  box-shadow: inset 4px 2px 10px rgba(0, 0, 0, 0.4);
`;

const Footer = styled.div`
  border-radius: var(--standard-border-radius);
  display: grid;
  flex-direction: row;
  margin: var(--standard-margin);
`;

const QuizH1 = styled.h1`
  font-size: 46px;
`;

const Start = ({
  allQuizzes,
  quiz,
  quizSelected,
  changeStatusForward,
  changeStatusBackward,
  chooseQuiz,
  chosenQuiz,
  imFeelingLucky,
}) => {
  if (!quizSelected) {
    return (
      <Container>
        <Header>
          <h2>Select a quiz to start playing!</h2>
          <Button
            style={{
              borderRadius: 'var(--standard-border-radius)',
              backgroundColor: '#FFD700',
              color: "black",
              margin: "0% 40% 10% 40%",
            }}
            variant='contained'
            onClick={imFeelingLucky}
          >
            I'm feeling lucky
          </Button>
        </Header>
        <Body>
          <div>
            {allQuizzes.map((quiz, idx) => {
              return (
                <QuizFeedItem
                  quiz={quiz}
                  changeStatusForward={changeStatusForward}
                  chooseQuiz={chooseQuiz}
                  key={idx}
                />
              );
            })}
          </div>
        </Body>
        <Footer>
          <span>
            <Button
              style={{
                borderRadius: 'var(--standard-border-radius)',
                backgroundColor: 'var(--accent-color)',
                color: 'black',
              }}
              variant='contained'
              onClick={chosenQuiz}
            >
              Next
            </Button>
          </span>
        </Footer>
      </Container>
    );
  } else if (quizSelected) {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <h3>You've selected:</h3>
        <br />
        <QuizH1>{quiz}</QuizH1>
        <br />
        <Footer>
          <span>
            <Button
              style={{
                height: 40,
                margin: 'var(--standard-margin)',
                borderRadius: 'var(--standard-border-radius)',
                backgroundColor: 'var(--accent-color)',
                color: 'black',
              }}
              variant='contained'
              onClick={changeStatusBackward}
            >
              Select another Quiz
            </Button>
            <Button
              style={{
                height: 40,
                margin: 'var(--standard-margin)',
                borderRadius: 'var(--standard-border-radius)',
                backgroundColor: 'var(--accent-color)',
                color: 'black',
              }}
              variant='contained'
              onClick={changeStatusForward}
            >
              Play this one!
            </Button>
          </span>
        </Footer>
      </div>
    );
  }
};

export default Start;