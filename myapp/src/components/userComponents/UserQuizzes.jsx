import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js';
import UserGeneratedQuiz from './UserGeneratedQuiz.jsx';
import FriendsList from './FriendsList.jsx';
import ReportedQuizzes from './ReportedQuizzes.jsx';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 400px;
  text-align: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: column;
  align-items: center;
  vh: 400 px;
  overflow: scroll;
  box-shadow: var(--standard-shadow);
`;

const UserQuizzes = (props) => {

  const [userQuizzes, setUserQuizzes] = useState(exampleQuizzes);
  const [showQuizzes, setShowQuizzes] = useState(4);
  const [userQuizList, setUserQuizList] = useState([]);

  const getUserQuizzes = () => {
    const username = 'superuser';
    const categoryName = null;
    const isReported = null;
    axios.get(`http://52.90.8.77:4444/quizzes/${username}&${categoryName}&${isReported}`)
      .then((response) => {
        setUserQuizList(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(()=> {
    getUserQuizzes()
  }, [])

  return (
    <Container>
      User Quizzes
      {userQuizList.map((userQuiz, i) => {
        return <UserGeneratedQuiz userQuiz={userQuiz} userQuizList={userQuizList} key={i}/>
      })}
    </Container>
  );
};

export default UserQuizzes;