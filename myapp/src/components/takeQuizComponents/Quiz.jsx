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

const Quiz = ({ quiz, changeStatusForward, changeStatusBackward, allQuizzes }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getQuiz();
  }, [])

  const getQuiz = () => {
    for (let i = 0; i < allQuizzes.length; i++) {
      if (allQuizzes[i].quizName === quiz) {
        console.log('QUIZ FOUND HERE IS THE OBJ', allQuizzes[i])
        setSelectedQuiz(allQuizzes[i]);
      }
    }
  }

  const previousQuestion = () => {
    setCounter(counter - 1);
  }

  const nextQuestion = () => {
    setCounter(counter + 1);
  }

  const keepScore = () => {
    setScore(score + 1);
  }

  console.log('selectedQuiz --', selectedQuiz)

  console.log('selectedQuiz.quizQuestions --', selectedQuiz.quizQuestions)
  return (
    <Container>
    <Header>{selectedQuiz ? (
    <span>
    <FloatLeft>{selectedQuiz.quizName}</FloatLeft>
    <FloatRight>{score}/{selectedQuiz.quizQuestions.length}</FloatRight>
    </span>
    ) : null}</Header>
    <Body>
      {selectedQuiz ? <div>{counter + 1}. {selectedQuiz.quizQuestions[counter].question}</div> : null}
     {selectedQuiz ?
     (<span>
      <button>{selectedQuiz.quizQuestions[counter].incorrectAnswers[0]}</button>
      <button>{selectedQuiz.quizQuestions[counter].incorrectAnswers[1]}</button>
      <button onClick={keepScore}>{selectedQuiz.quizQuestions[counter].correctAnswer}</button>
      <button>{selectedQuiz.quizQuestions[counter].incorrectAnswers[2]}</button>
      </span>)
      : null}
    </Body>
    <Footer>
      <span>
        <FloatLeft>
          <button onClick={previousQuestion}>Previous</button>
        </FloatLeft>
        <button onClick={changeStatusBackward}>Exit quiz</button>
        <FloatRight>
        <button onClick={nextQuestion}>Next</button>
        </FloatRight>
      </span>
    </Footer>
    </Container>
  );
};

export default Quiz;

    // {(counter === selectedQuiz.quizQuestions.length - 1) ?
          //  <button onClick={changeStatusForward}>Finish Quiz</button> :
          //  <button onClick={nextQuestion}>Next</button>
          // } : null }