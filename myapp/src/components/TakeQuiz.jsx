import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizBody from './takeQuizComponents/QuizBody.jsx';
import Header from './takeQuizComponents/Header.jsx';
import Footer from './takeQuizComponents/Footer.jsx';

const BaseLayout = styled.div`
  display: grid;
  grid-template-rows: 10% 70% 20%;
  height: 600px;
`;

const TakeQuiz = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  //TODO
  //CONDITIONAL RENDERING (either Header, StartPage and Footer or QuizBody)
  //if isPlaying === false (defualt)
    //page should display *quizname* stats and start button
  //button click should setIsPlaying to true
    //and display modal/page with questions in order

  return (
  <BaseLayout>
  <Header />
  <QuizBody />
  <Footer />
  <br/>
  <br/>
  <br/>
  </BaseLayout>);
};

export default TakeQuiz;

/*

Header
QuizBody
Footer

*/