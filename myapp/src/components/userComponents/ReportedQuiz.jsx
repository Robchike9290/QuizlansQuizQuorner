import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const QuizDiv = styled.div`
  background-color: var(--accent-color);
  // height: 50px;
  font-size: 15px;
  width: 85%;
  border-radius: 8px;
  border: 2px solid black;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ReportedQuiz = (props) => {
  return (
    <QuizDiv id={props.eachReportedQuiz._id} onClick={() => props.deleteQuiz(props.eachReportedQuiz._id)}>{props.eachReportedQuiz.quizName}
    </QuizDiv>
  )
}

export default ReportedQuiz;