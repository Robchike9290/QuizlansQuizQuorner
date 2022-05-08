import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  width: 75%;
  text-align: center;
  justify-content: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: row;
`;

const QuizQuestion = () => {

  return (
    <Container>
      QuizQuestion
    </Container>
  );
};

export default QuizQuestion;