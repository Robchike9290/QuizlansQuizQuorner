import React from 'react';

const UserGeneratedQuiz = (props) => {
  //console.log('💄💄💄💄', props);
  return (
    <span>{props.userQuiz.quizName}</span>
  )
}

export default UserGeneratedQuiz;