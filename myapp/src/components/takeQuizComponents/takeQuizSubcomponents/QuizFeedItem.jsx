import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--yellow);
  border-radius: var(--standard-border-radius);
  margin: var(--standard-margin);
`;

const QuizFeedItem = ({ quiz, changeStatusForward, chooseQuiz}) => {
  return (
    <Container onClick={e => chooseQuiz(e.target.outerText)}>
       {quiz.quizName}
    </Container>
  );
};

export default QuizFeedItem;