import React from 'react';
import axios from 'axios';






const ReportedQuiz = (props) => {
  return (
    <div>{props.eachReportedQuiz.quizName}</div>
  )
}

export default ReportedQuiz;