import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizFeedItem from './subsubcomponents/QuizFeedItem.jsx'
//import sample data*******

const Container = styled.div`
  // border: 1mm outset #5b96c2;
  border-radius: var(--standard-border-radius)
  height: 500px;
  text-align: center;
`;

const QuizFeed = () => {

 //map over quiz data
  //QuizFeed ->
    // map over quizzes and sort by recently made (what other sorting criteria?)
  //QuizFeedItem ->
    // render quizzes with margins between them
    // get info from data (pass down as props or import directly to QuizFeedItem?)

  return (
    <Container>
      <h4>
      QuizFeed
      </h4>
      <div>
        <QuizFeedItem />
        <QuizFeedItem />
        <QuizFeedItem />
        <QuizFeedItem />
      </div>
    </Container>
  );
};

export default QuizFeed;