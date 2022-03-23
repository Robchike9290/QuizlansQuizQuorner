import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendsList from './userComponents/FriendsList.jsx'
import QuizFeed from './homeComponents/QuizFeed.jsx'
import RecentQuizzes from './userComponents/RecentQuizzes.jsx'
import UserQuizzes from './userComponents/UserQuizzes.jsx'

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

const User = (props) => {
  //console.log('🧠🧠🧠🧠', props.currentUser.email)
  return (<HomeLayout>
  <FriendsList currentUser={props.currentUser}/>
  <div>
  <RecentQuizzes currentUser={props.currentUser}/>
  <UserQuizzes currentUser={props.currentUser}/>
   </div>
  </HomeLayout>)
};

export default User;

/*
make subcomponents:
UserQuizzes
RecentQuizzes
*/
