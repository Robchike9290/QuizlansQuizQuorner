import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizBody from './takeQuizComponents/QuizBody.jsx';
import Start from './takeQuizComponents/Start.jsx';
import Quiz from './takeQuizComponents/Quiz.jsx';
import Results from './takeQuizComponents/Results.jsx';

const BaseLayout = styled.div`
  margin: var(--standard-margin);
  text-align: center;
  height: 600px;
`;

const TakeQuiz = () => {
  const [pageStatus, setPageStatus] = useState('start'); //start, quiz, results
  const [quiz, setQuiz] = useState(undefined); //will change when a user selects a quiz to play

  useEffect(() => {

  }, [quiz])

  const changeStatus = () => {
    if (pageStatus === 'start') {
      setPageStatus('quiz');
    } else if (pageStatus === 'quiz') {
      setPageStatus('results');
    } else if (pageStatus === 'results') {
      setPageStatus('start') //display options to start new quiz
    }
  }

  //TODO
  //CONDITIONAL RENDERING (either Header, StartPage and Footer or QuizBody)
  //if isPlaying === false (defualt)
    //page should display *quizname* stats and start button
  //button click should setIsPlaying to true
    //and display modal/page with questions in order

  return (
  <BaseLayout>
  {pageStatus === 'start' ? <Start quiz={quiz} changeStatus={changeStatus}/> :
  pageStatus === 'quiz' ? <Quiz changeStatus={changeStatus}/> :
  pageStatus === 'results' ? <Results changeStatus={changeStatus}/> : null }

  </BaseLayout>);
};

export default TakeQuiz;

/*

Header
QuizBody
Footer

*/