import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendsList from './homeComponents/FriendsList.jsx'
import QuizFeed from './homeComponents/QuizFeed.jsx'
import RecentQuizzes from './userComponents/RecentQuizzes.jsx'
import UserQuizzes from './userComponents/UserQuizzes.jsx'
import ReportedQuizzes from './userComponents/RecentQuizzes.jsx';

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;



const User = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  //console.log('🧠🧠🧠🧠', props.currentUser.email)
  return (<HomeLayout>
  <FriendsList currentUser={props.currentUser}/>
  <div>
  {/* <RecentQuizzes currentUser={props.currentUser}/> */}
  <UserQuizzes currentUser={props.currentUser} userName={props.userName}/>
  <ReportedQuizzes />
   </div>
  </HomeLayout>)
};


export default User;

/*
make subcomponents:
UserQuizzes
RecentQuizzes
*/
