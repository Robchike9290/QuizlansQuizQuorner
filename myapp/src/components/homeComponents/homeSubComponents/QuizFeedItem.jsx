import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  text-align: center;
  margin: var(--standard-margin);
  background-color: var(--blue);
  box-shadow: var(--standard-shadow);
  font-size: var(--standard-text-size);
  font-weight: var(--standard-text-weight);
  display: grid;
  grid-template-rows: 20% 80%;
`;

const Banner = styled.div`
  height: 100px;
  overflow: hidden;
  border-top-left-radius: var(--standard-border-radius);
  border-top-right-radius: var(--standard-border-radius);
  grid-row: 1 / span 1;
`;

const TextData = styled.div`
  grid-row: 2 / span 1;
  display: grid;
  grid-template-rows: 80px 200px 80px;
  grid-template-columns: 30% 40% 30%;
`;

const QuizFeedItem = ({
  quizName,
  category,
  createdBy,
  timesTaken,
  description,
  banner,
  upvotes,
  downvotes,
  score,
  selectedQuiz,
  setSelectedQuiz,
}) => {
  //QuizFeed ->
  // map over quizzes and sort by recently made (what other sorting criteria?)

  const handleRating = (voteType) => {
    axios
      .post('/FillMeIn')
      .then((response) => {
        console.log('rating handled');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReport = () => {
    axios
      .post('/FillMeIn')
      .then((response) => {
        console.log('report handled');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Banner>
        <img src={`${banner}`} />
      </Banner>
      <TextData>
        <Name onClick={() => handleQuizSelect(event)}>{quizName}</Name>
        <Category>{category}</Category>
        <Author>Author: {createdBy}</Author>
        <TimesTaken>{timesTaken} people have taken this quiz</TimesTaken>
        <Description>{description}</Description>
        <Votes>
          <div>{upvotes} upvotes</div>
          <div>{downvotes} downvotes</div>
        </Votes>
        <Score>{score % timesTaken}% average score</Score>
        {/* UPVOTE <FontAwesomeIcon icon="fa-solid fa-caret-up" name="upvote" onClick={()=>handleRating(event.target.name}/> */}
        {/* DOWNVOTE <FontAwesomeIcon icon="fa-solid fa-caret-down" name="downvote" onClick={()=>handleRating(event.target.name}/>/> */}
        {/* REPORT <FontAwesomeIcon icon="fa-solid fa-flag" /> */}
      </TextData>
    </Container>
  );
};

export default QuizFeedItem;

const Name = styled.div`
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
  font-size: var(--minor-heading-size);
  font-weight: var(--minor-heading-weight);
  //word-wrap: break-word;
  &:hover {
    color: var(--background-color);
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Category = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  //word-wrap: break-word;
`;
const Author = styled.div`
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  word-break: break-all;
`;
const TimesTaken = styled.div`
  grid-row: 3 / span 1;
  grid-column: 2 . span 1;
`;
const Votes = styled.div`
  grid-row: 3 / span 1;
  grid-column: 1 / span 1;
`;
const Score = styled.div`
  grid-row: 2 / span 1;
  grid-column: 3 / span 1;
`;
const Description = styled.div`
  background-color: var(--accent-color);
  width: 50%;
  box-shadow: var(--standard-shadow);
  border-radius: var(--standard-border-radius);
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  margin: auto;
`;
