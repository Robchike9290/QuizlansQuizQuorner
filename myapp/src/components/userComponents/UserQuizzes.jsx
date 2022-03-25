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
  vh: 400 px;
  overflow: scroll;
`;

const UserQuizzes = (props) => {

  const [userQuizzes, setUserQuizzes] = useState(exampleQuizzes)
  const [showQuizzes, setShowQuizzes] = useState(4);

  const getUserQuizzes = () => {
    // var data = {
    //   createdBy: 'stand-in-user'
    // };

    // var config = {
    //   method: 'get',
    //   url: 'http://52.90.8.77:4444/quizzes',
    //   data : data
    // };

  //   axios.get('http://52.90.8.77:4444/quizzes', { createdBy: props.userName })
  //   .then(function (response) {
  //     console.log('user quizzes', response.data);
  //     setUserQuizzes(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log('user quiz error', error);
  //   });
    console.log(props.userName)
    const username = props.userName;
    const categoryName = null;
    const isReported = null;
    axios.get(`http://52.90.8.77:4444/quizzes/${username}&${categoryName}&${isReported}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // var config = {
  //   method: 'get',
  //   url: '52.90.8.77:4444/user',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   data : data
  // };

  // axios(config)
  // .then(function (response) {
  //   console.log('👄👄👄👄', JSON.stringify(response.data));
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });












  //console.log('👅👅👅👅👅', userQuizzes);
 //console.log('💄💄💄💄💄👁👁', props.currentUser);
  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  useEffect(()=> {
    getUserQuizzes()
  }, [])


  return (
    <Container>
      User Quizzes
      {userQuizzes.map((userQuiz) => {
        return <UserGeneratedQuiz userQuiz={userQuiz} userQuizzes={userQuizzes} key={userQuiz.quizID}/>
        // <ReportedQuizzes/>
      })}
    </Container>
  );
};
//userQuiz.createBy

export default UserQuizzes;