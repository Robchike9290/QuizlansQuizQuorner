import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js'

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 400px;
  text-align: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: column;
`;

const UserQuizzes = () => {

  const [UserQuizzes, setUserQuizzes] = useState(exampleQuizzes)

  const getUserQuizzes = () => {
    axios.get('/FillMeIn')
      .then((response)=> {
        setUserQuizzes(response.data)
      })
      .catch((error)=> {
        console.error(error)
      })
  }

  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  //useEffect(()=> {
  //  getRecentQuizzes()
  //}, [])

  return (
    <Container>
      User Quizzes
    </Container>
  );
};

export default UserQuizzes;