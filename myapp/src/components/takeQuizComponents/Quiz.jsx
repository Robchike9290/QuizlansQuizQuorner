import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { exampleQuizzes } from './../../../mockData/exampleQuizzes.js';

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

const Quiz = ({
  quiz,
  changeStatusForward,
  changeStatusBackward,
  allQuizzes,
  score,
  keepScore,
}) => {
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
  }, []);

  const previousQuestion = () => {
    setCounter(counter - 1);
  };

  const nextQuestion = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <Header>
        {selectedQuiz ? (
          <span>
            <FloatLeft>{selectedQuiz.quizName}</FloatLeft>
            <FloatRight>
              {score} / {selectedQuiz.quizQuestions.length}
            </FloatRight>
          </span>
        ) : null}
      </Header>
      <Body>
        {selectedQuiz ? (
          <div>
            {counter + 1}. {selectedQuiz.quizQuestions[counter].question}
          </div>
        ) : null}
        {selectedQuiz ? (
          <span>
            <button>
              {selectedQuiz.quizQuestions[counter].incorrectAnswers[0]}
            </button>
            <button>
              {selectedQuiz.quizQuestions[counter].incorrectAnswers[1]}
            </button>
            <button onClick={keepScore}>
              {selectedQuiz.quizQuestions[counter].correctAnswer}
            </button>
            <button>
              {selectedQuiz.quizQuestions[counter].incorrectAnswers[2]}
            </button>
          </span>
        ) : null}
      </Body>
      <Footer>
        <span>
          <FloatLeft>
            {selectedQuiz ? (
              counter !== 0 ? (
                <button onClick={previousQuestion}>Previous</button>
              ) : null
            ) : null}
          </FloatLeft>
          <button>Report</button>
          <button onClick={changeStatusBackward}>Exit</button>
          <FloatRight>
            {/* <button onClick={nextQuestion}>Next</button> */}
            {selectedQuiz ? (
              counter !== selectedQuiz.quizQuestions.length - 1 ? (
                <button onClick={nextQuestion}>Next</button>
              ) : (
                <button onClick={changeStatusForward}>Finish Quiz</button>
              )
            ) : null}
          </FloatRight>
        </span>
      </Footer>
    </Container>
  );
};

export default Quiz;
