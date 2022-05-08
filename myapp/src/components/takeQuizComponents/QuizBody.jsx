import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { exampleQuizzes } from './../../../mockData/exampleQuizzes.js';
import QuizQuestion from './takeQuizSubcomponents/QuizQuestion.jsx';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--background-color);
  text-align: center;
  justify-content: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: row;
`;

const QuizBody = () => {
  const [quizQuestion, setQuizQuestion] = useState(exampleQuizzes[0]);

  const getQuizQuestion = () => {
    axios
      .get('/FillMeIn')
      .then((response) => {
        setQuizQuestion(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <QuizQuestion />
    </Container>
  );
};

export default QuizBody;
