import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizFeed from './homeComponents/QuizFeed.jsx';
import FriendsList from './homeComponents/FriendsList.jsx';
import PopularQuizzes from './homeComponents/PopularQuizzes.jsx';
import UserBox from './homeComponents/UserBox.jsx';

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 30% 50% 20%;
  font-size: var(--major-heading-size);
  font-weight: var(--major-heading-weight);
`;

const Home = ({
  fullQuizList,
  selectedQuiz,
  setSelectedQuiz,
  setFullQuizList,
}) => {
  return (
    <HomeLayout>
      <div>
        <UserBox />
        <FriendsList />
      </div>
      <QuizFeed
        fullQuizList={fullQuizList}
        selectedQuiz={selectedQuiz}
        setSelectedQuiz={setSelectedQuiz}
        setFullQuizList={setFullQuizList}
      />
      <PopularQuizzes
        selectedQuiz={selectedQuiz}
        setSelectedQuiz={setSelectedQuiz}
      />
    </HomeLayout>
  );
};

export default Home;
