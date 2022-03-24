import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
//import sample data

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  text-align: center;
  margin: var(--standard-margin);
  background-color: var(--blue);
  box-shadow: var(--standard-shadow);
`;

const Contents = styled.div`
  //align bottom left
`;

const Banner = styled.div`
  height: 100px;
  overflow: hidden;
`;

const Description = styled.div`
  background-color: var(--purple);
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
  //map over quiz data
  //QuizFeed ->
  // map over quizzes and sort by recently made (what other sorting criteria?)
  //QuizFeedItem ->
  // render quizzes with margins between them
  // get info from data (pass down as props or import directly to QuizFeedItem?)

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
      <Contents>
        <Banner>
          <img src={`${banner}`} />
        </Banner>
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
      </Contents>
    </Container>
  );
};

export default QuizFeedItem;
