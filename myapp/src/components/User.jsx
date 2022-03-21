import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendsList from './homeComponents/FriendsList.jsx'
import QuizFeed from './homeComponents/QuizFeed.jsx'
import RecentQuizzes from './userComponents/RecentQuizzes.jsx'
import UserQuizzes from './userComponents/UserQuizzes.jsx'

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

const User = () => {
  return (<HomeLayout>
  <FriendsList />
  <div>
  <RecentQuizzes/>
  <UserQuizzes/>
   </div>
  </HomeLayout>)
};

export default User;

/*
make subcomponents:
UserQuizzes
RecentQuizzes
*/
