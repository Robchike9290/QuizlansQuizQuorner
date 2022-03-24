import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: left;
  margin: var(--standard-margin);
`;

const PopularQuizItem = ({ quizName }) => {
  return (
    <Container>
      {quizName}
      {/*eventually link to individual quiz page*/}
    </Container>
  );
};

export default PopularQuizItem;
