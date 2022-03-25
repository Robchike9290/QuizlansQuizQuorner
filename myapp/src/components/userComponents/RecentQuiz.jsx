import React from 'react';
import styled from 'styled-components';

const QuizDiv = styled.div`
  background-color: var(--accent-color);
  height: 50px;
  font-size: 15px;
  width: 85%;
  border-radius: 8px;
  border: 2px solid black;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RecentQuiz = (props) => {
  //console.log(props);
  // const quizName = props.eachQuiz.quizName;
  return (
    <QuizDiv>
      <div>{props.quiz.quizName}</div>
      <div>{props.quiz.userScores}</div>
    </QuizDiv>
  )
}

export default RecentQuiz;