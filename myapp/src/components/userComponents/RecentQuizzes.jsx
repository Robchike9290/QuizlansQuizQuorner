import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js';
import RecentQuiz from './RecentQuiz.jsx';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 250px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: var(--standard-margin);
  flex-direction: column;
  overflow: scroll;
`;

// nothing will show unless the currently logged in user (Nic's firebase)
// has quizzes, currently using mockdata.

const RecentQuizzes = (props) => {

  const [recentQuizzes, setRecentQuizzes] = useState(exampleQuizzes);
  const [showNumber, setShowNumber] = useState(6);


  const getRecentQuizzes = () => {
    axios.get('/quizzes/')
      .then((response)=> {
        //console.log('💋💋💋💋💋', response.data)
        setRecentQuizzes(response.data)
      })
      .catch((error)=> {
        console.error(error)
      })
  }







  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  useEffect(()=> {
   getRecentQuizzes()
  }, [])

  //


  return (
    <Container>
      Recent Quizzes
        {props.quizHistory.map((quiz, key) => (
          <RecentQuiz quiz={quiz} key={key}/>
        ))}
    </Container>
  );
};
// props.currentUser.email

export default RecentQuizzes;