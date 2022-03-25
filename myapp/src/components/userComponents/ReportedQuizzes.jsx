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
`;

// nothing will show unless the currently logged in user (Nic's firebase)
// has quizzes, currently using mockdata.

const ReportedQuizzes = (props) => {

  const reportedQuizzesMock = () => {
    return exampleQuizzes.filter(exampleQuiz => {
      exampleQuiz.reported === true;
    });
  };

  const [reportedQuizzesList, setReportedQuizzes] = useState(reportedQuizzesMock);


  const getReportedQuizzes = () => {
    const createdBy = null;
    const category = null;
    const report = true;

    axios.get(`/quizzes/${createdBy}&${category}&${true}`)
    .then((results) => {
      setReportedQuizzes(results);
      console.log('Reported👀👀👀👀: ', reportedQuizzesList);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(()=> {
    getReportedQuizzes()
  }, [])




  return (
    <Container>
      Reported Quizzes
      <div>
        {reportedQuizzesList.map((eachReportedQuiz) => (
          <ReportedQuiz eachReportedQuiz={eachReportedQuiz} removeQuiz={removeQuiz}/>
        ))}
      </div>
    </Container>
  );
};

export default ReportedQuizzes;