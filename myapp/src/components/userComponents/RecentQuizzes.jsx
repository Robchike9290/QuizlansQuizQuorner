import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js'

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 250px;
  text-align: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: column;
`;

const RecentQuizzes = () => {

  const [recentQuizzes, setRecentQuizzes] = useState(exampleQuizzes)

  const getRecentQuizzes = () => {
    axios.get('/FillMeIn')
      .then((response)=> {
        setRecentQuizzes(response.data)
      })
      .catch((error)=> {
        console.error(error)
      })
  }







  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  //useEffect(()=> {
  //  getRecentQuizzes()
  //}, [])

  //

  return (
    <Container>
      Recent Quizzes
      <div>
        {recentQuizzes.map((quiz, key) => (
          <recentQuiz quiz={quiz} />
        ))}
      </div>
    </Container>
  );
};

export default RecentQuizzes;