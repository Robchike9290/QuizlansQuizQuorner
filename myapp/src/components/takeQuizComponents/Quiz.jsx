import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { exampleQuizzes } from './../../../mockData/exampleQuizzes.js';
import { Button } from '@mui/material'


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
  //fixed width until I can figure out issue with justify-content
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

const FloatRight = styled.div`
  margin: var(--standard-margin);
  float: right;
`;

const FloatLeft = styled.div`
  margin: var(--standard-margin);
  float: left;
`;

const Quiz = ({ quiz, changeStatusForward, changeStatusBackward, allQuizzes, score, keepScore }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [counter, setCounter] = useState(0);

  const getQuiz = () => {
    for (let i = 0; i < allQuizzes.length; i++) {
      if (allQuizzes[i].quizName === quiz) {
        console.log('QUIZ FOUND HERE IS THE OBJ', allQuizzes[i]);
        setSelectedQuiz(allQuizzes[i]);
      }
    }
  };

  useEffect(() => {
    getQuiz();
  }, [])

  const previousQuestion = () => {
    setCounter(counter - 1);
  };

  const nextQuestion = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
    <Header>{selectedQuiz ? (
    <span>
    <FloatLeft>{selectedQuiz.quizName}</FloatLeft>
    <FloatRight>{score} / {selectedQuiz.quizQuestions.length}</FloatRight>
    </span>
    ) : null}</Header>
    <Body>
      {selectedQuiz ? <div>{counter + 1}. {selectedQuiz.quizQuestions[counter].question}</div> : null}
     {selectedQuiz ?
     (<span>
      <Button style={{
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--background-color)",
        color: "black"
        }}
        variant="contained">{selectedQuiz.quizQuestions[counter].incorrectAnswers[0]}</Button>
      <Button style={{
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--background-color)",
        color: "black"
        }}
        variant="contained">{selectedQuiz.quizQuestions[counter].incorrectAnswers[1]}</Button>
      <Button style={{
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--background-color)",
        color: "black"
        }}
        variant="contained" onClick={keepScore}>{selectedQuiz.quizQuestions[counter].correctAnswer}</Button>
      <Button style={{
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--background-color)",
        color: "black"
        }}
        variant="contained">{selectedQuiz.quizQuestions[counter].incorrectAnswers[2]}</Button>
      </span>)
      : null}
    </Body>
    <Footer>
      <span>
        <FloatLeft>
        {selectedQuiz ? ((counter !== 0) ?
            <button onClick={previousQuestion}>Previous</button> :
            null
          ) : null}
        </FloatLeft>
        <Button style={{
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--accent-color)",
        color: "black"
        }}
        variant="contained">Report</Button>
          <Button style={{
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--accent-color)",
        color: "black"
        }}
        variant="contained" onClick={changeStatusBackward}>Exit</Button>
        <FloatRight>
        {/* <button onClick={nextQuestion}>Next</button> */}
          {selectedQuiz ? ((counter !== selectedQuiz.quizQuestions.length - 1) ?
            <Button style={{
              borderRadius: "var(--standard-border-radius)",
              backgroundColor: "var(--accent-color)",
              color: "black"
              }}
              variant="contained" onClick={nextQuestion}>Next</Button> :
              <Button style={{
                borderRadius: "var(--standard-border-radius)",
                backgroundColor: "var(--blue)",
                color: "black"
                }}
                variant="contained" onClick={changeStatusForward}>Finish Quiz</Button>
          ) : null}
        </FloatRight>
      </span>
    </Footer>
    </Container>
  );
};

export default Quiz;
