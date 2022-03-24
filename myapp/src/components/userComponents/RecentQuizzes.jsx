import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js';
import RecentQuiz from './RecentQuiz.jsx';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 250px;
  text-align: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: column;
`;

// nothing will show unless the currently logged in user (Nic's firebase)
// has quizzes, currently using mockdata.

const RecentQuizzes = (props) => {

  const [recentQuizzes, setRecentQuizzes] = useState(exampleQuizzes);
  const [showNumber, setShowNumber] = useState(6);


  const getRecentQuizzes = () => {
    axios.get('/quizzes')
      .then((response)=> {
        //console.log('💋💋💋💋💋', response.data)
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
        {recentQuizzes.filter(recentQuiz =>
          recentQuiz.createdBy === 'PatrickTheAssistant' && recentQuiz.timesTaken > 0)
         .slice(0, showNumber).map((eachQuiz, key) => (
          <RecentQuiz eachQuiz={eachQuiz} key={key}/>
        ))}
      </div>
    </Container>
  );
};
// props.currentUser.email

export default RecentQuizzes;