import React from 'react';


const RecentQuiz = (props) => {


  console.log(props);

  const quizName = props.eachQuiz.quizName;
  return (
    <span>{quizName}</span>
  )
}

export default RecentQuiz;