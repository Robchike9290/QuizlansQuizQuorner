import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PopularQuizItem from './subsubcomponents/PopularQuizItem.jsx';
//import sample data

const Container = styled.div`
  //border: 1mm outset #5b96c2;
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 500px;
  text-align: center;
`;

const PopularQuizzes = () => {
  return (
    <Container>
    <h4>
    Popular Quizzes
    </h4>
    <PopularQuizItem />
    <PopularQuizItem />
    <PopularQuizItem />
    <PopularQuizItem />
  </Container>
  );
};

export default PopularQuizzes;