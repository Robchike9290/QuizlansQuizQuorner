import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizFeed from './subcomponents/QuizFeed.jsx'
import FriendsList from './subcomponents/FriendsList.jsx'
import PopularQuizzes from './subcomponents/PopularQuizzes.jsx'
//import subcomponents
// import hiKatie from Jenny:D
// import ily <3 from all of my heart;

//I can explain this after my tapout!! But it should be work-on-able now
const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

//elements to add (aka add to subcomponents folder and then plug into HomeLayout Div):
//feed
//right sidebar (friend's list)
//left sidebar (popular quizzes)

const Home = () => {
  return (
    <HomeLayout>
      <FriendsList />
      <QuizFeed />
      <PopularQuizzes />
    </HomeLayout>
  );
};

export default Home;


