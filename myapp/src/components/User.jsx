import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendsList from './userComponents/FriendsList.jsx';
import QuizFeed from './homeComponents/QuizFeed.jsx'
import RecentQuizzes from './userComponents/RecentQuizzes.jsx'
import UserQuizzes from './userComponents/UserQuizzes.jsx'
import ReportedQuizzes from './userComponents/ReportedQuizzes.jsx';

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

const User = (props) => {

  useEffect(() => {
    props.getUser(props.registerEmail);
  }, [])

  return (<HomeLayout>
  <FriendsList currentUser={props.currentUser} userName={props.userName} registerEmail={props.registerEmail} getUser={props.getUser} friends={props.friends} />
  <div>
  <RecentQuizzes currentUser={props.currentUser} registerEmail={props.registerEmail} quizHistory={props.quizHistory}/>
  {<UserQuizzes currentUser={props.currentUser} userName={props.userName} registerEmail={props.registerEmail} />}
  </div>
  </HomeLayout>)
};

export default User;