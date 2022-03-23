import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js'

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  text-align: center;
  justify-content: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: row;
`;

const Header = () => {

  // const [quizQuestion, setQuizQuestion] = useState(exampleQuizzes[0])

  // const getQuizQuestion = () => {
  //   axios.get('/FillMeIn')
  //     .then((response)=> {
  //       setQuizQuestion(response.data)
  //     })
  //     .catch((error)=> {
  //       console.error(error)
  //     })
  // }

  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  //useEffect(()=> {
  //  getQuizQuestion()
  //}, [])

  return (
    <Container>
      Header here
    </Container>
  );
};

export default Header;