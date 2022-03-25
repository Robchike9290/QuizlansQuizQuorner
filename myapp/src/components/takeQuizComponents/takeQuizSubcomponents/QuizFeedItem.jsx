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
    cursor: pointer
  }
  &:active {
  background-color: var(--background-color);
  }
`;

const StyledBanner = styled.img`
  border-radius: var(--standard-border-radius);
  box-shadow: 0 2px 5px 0 black;
  height: 30px;
  margin-right: var(--standard-margin);
  float: left;
  width: 100px;
`;

const StyledText = styled.div`
  // margin-left: 100px;
  // float: left;
`;

const QuizFeedItem = ({ quiz, changeStatusForward, chooseQuiz }) => {
  return (
    <Container  onClick={(e) => chooseQuiz(e.target.outerText)}>
      <StyledBanner src={`${quiz.quizBanner}`}></StyledBanner>
      <StyledText>{quiz.quizName}</StyledText>
      {/* {console.log('!!!!!quiz.quizBanner', quiz.quizBanner)} */}
    </Container>
  );
};

export default QuizFeedItem;
