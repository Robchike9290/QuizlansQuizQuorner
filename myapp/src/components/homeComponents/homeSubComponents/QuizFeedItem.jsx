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
`;

const Description = styled.div`
  background-color: var(--accent-color);
  width: 50%;
  box-shadow: var(--standard-shadow);
  border-radius: var(--standard-border-radius);
  margin: auto;
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
        <div>Name: {quizName}</div>
        <div>Category: {category}</div>
        <div>Created By: {createdBy}</div>
        <div>{timesTaken} people have taken this quiz</div>
        <Description>{description}</Description>
        <div>{upvotes} upvotes</div>
        <div>{downvotes} downvotes</div>
        <div>{score % timesTaken}% average score</div>
        {/* UPVOTE <FontAwesomeIcon icon="fa-solid fa-caret-up" name="upvote" onClick={()=>handleRating(event.target.name}/> */}
        {/* DOWNVOTE <FontAwesomeIcon icon="fa-solid fa-caret-down" name="downvote" onClick={()=>handleRating(event.target.name}/>/> */}
        {/* REPORT <FontAwesomeIcon icon="fa-solid fa-flag" /> */}
      </TextData>
    </Container>
  );
};

export default QuizFeedItem;
