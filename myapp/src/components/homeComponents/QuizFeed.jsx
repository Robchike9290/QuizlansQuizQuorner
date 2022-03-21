import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizFeedItem from './homeSubComponents/QuizFeedItem.jsx'
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js'

const Container = styled.div`
  border-radius: var(--standard-border-radius)
  height: 500px;
  text-align: center;
`;

const QuizFeed = () => {
  const [quizList, setQuizList] = useState(exampleQuizzes)

  const getQuizzes = () => {
    axios.get('/FillMeIn')
      .then((response)=> {
        setQuizList(response.data)
      })
      .catch((error)=> {
        console.error(error)
      })
  }

  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  //useEffect(()=> {
  //  getPopularQuizzes()
  //}, [])

  return (
    <Container>
      <h4>
      QuizFeed
      </h4>
      {quizList.length > 0 &&
      quizList.map((listItem, index) => { return (
        <QuizFeedItem
          quizName={listItem.quizName}
          category={listItem.category}
          createdBy={listItem.createdBy}
          timesTaken={listItem.timesTaken}
          description={listItem.quizDescription}
          banner={listItem.quizBanner}
          upvotes={listItem.quizUpvotes}
          downvotes={listItem.quizDownvotes}
          score={listItem.aggregateScore}
          key={index}
        />
      )})
    }
    </Container>
  );
};

export default QuizFeed;