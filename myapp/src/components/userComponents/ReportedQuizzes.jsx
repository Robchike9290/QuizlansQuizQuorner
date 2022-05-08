import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js';
import RecentQuiz from './RecentQuiz.jsx';
import ReportedQuiz from './ReportedQuiz.jsx';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 250px;
  text-align: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReportedQuizzes = (props) => {

  useEffect(()=> {
    getReportedQuizzes()

  }, [])

  const [reportedQuizzesList, setReportedQuizzesList] = useState([]);

  const deleteQuiz = (quizId) => {

    axios.post(`http://52.90.8.77:4444/removeQuiz`, {quizId: quizId})
    .then((results) => {
      getReportedQuizzes()
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const getReportedQuizzes = () => {
    const createdBy = null;
    const category = null;
    const isReported = true;

    axios.get(`http://52.90.8.77:4444/quizzes/${createdBy}&${category}&${isReported}`)
    .then((results) => {
      setReportedQuizzesList(results.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <Container>
      Reported Quizzes
        {reportedQuizzesList.map((eachReportedQuiz) => (
          <ReportedQuiz eachReportedQuiz={eachReportedQuiz} deleteQuiz={deleteQuiz}/>
        ))}
    </Container>
  );
};

export default ReportedQuizzes;