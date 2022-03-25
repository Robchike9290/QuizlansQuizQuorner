import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: black;
  background-color: var(--accent-color);
  border-radius: var(--standard-border-radius);
  margin: var(--standard-margin);
  box-shadow: 0 2px 5px 0 black;
  height: 30px;
  margin-left: 20%;
  margin-right: 20%;
  &:hover {
    box-shadow: 0 5px 7px 0 black;
  }
  &:active {
  background-color: var(--background-color);
  }
`;

const QuizFeedItem = ({ quiz, changeStatusForward, chooseQuiz }) => {
  return (
    <Container onClick={(e) => chooseQuiz(e.target.outerText)}>
      {quiz.quizName}
    </Container>
  );
};

export default QuizFeedItem;
