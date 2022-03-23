import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js';
import UserGeneratedQuiz from './UserGeneratedQuiz.jsx';
import FriendsList from './FriendsList.jsx';

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
  const [showQuizzes, setShowQuizzes] = useState(4);

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

 // replace createdby with the presently logged in user
  return (
    <Container>
      User Quizzes
      {UserQuizzes.filter(userQuiz => userQuiz.createdBy === 'LizTheQuizWiz').slice(0, showQuizzes).map((userQuiz) => {
        return <UserGeneratedQuiz userQuiz={userQuiz} key={userQuiz.quizID}/>
      })}
    </Container>
  );
};

export default UserQuizzes;