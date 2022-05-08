import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizBody from './takeQuizComponents/QuizBody.jsx';
import Start from './takeQuizComponents/Start.jsx';
import Quiz from './takeQuizComponents/Quiz.jsx';
import Results from './takeQuizComponents/Results.jsx';
import axios from 'axios';
import {exampleQuizzes} from './../../mockData/exampleQuizzes.js'

const BaseLayout = styled.div`
  margin: var(--standard-margin);
  text-align: center;
  height: 600px;
`;

const TakeQuiz = (props) => {
  const [pageStatus, setPageStatus] = useState('start');
  const [quiz, setQuiz] = useState(null);
  const [allQuizzes, setAllQuizzes] = useState(exampleQuizzes);
  const [quizSelected, setQuizSelected] = useState(false);
  const [score, setScore] = useState(0);

  const getQuizzes = () => {
    axios.get('http://52.90.8.77:4444/getAllQuizzes')
    .then((response) => {
      console.log('Got all quizzes from database -> ', response.data);
      setAllQuizzes(response.data)
    })
    .then(() => {
        console.log("allQuizzes ->", allQuizzes)
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const report = () => {
    window.alert(`You have reported ${quiz}`);
    for (let i = 0; i < allQuizzes.length; i++) {
      if (allQuizzes[i].quizName === quiz) {
        let newArray = allQuizzes;
        newArray.splice(i, 1);
        setAllQuizzes(newArray);
      }
    }
    setPageStatus('start')
    setQuizSelected(null);
  };

  useEffect(() => {
    getQuizzes();
    if (props.selectedQuiz) {
      setQuiz(props.selectedQuiz)
      chosenQuiz();
    }
  }, [])

  const changeStatusForward = () => {
    if (pageStatus === 'start') {
      setPageStatus('quiz');
    } else if (pageStatus === 'quiz') {
      setPageStatus('results');
    } else if (pageStatus === 'results') {
      setPageStatus('start');
    }
  }

  const changeStatusBackward = () => {
    if (pageStatus === 'start') {
      setQuizSelected(null);
    } else if (pageStatus === 'quiz') {
      setPageStatus('start');
      setQuizSelected(null);
    } else if (pageStatus === 'results') {
      setPageStatus('quiz');
    }
  }

  const chooseQuiz = (quizName) => {
    setQuiz(quizName);
  }

  const chosenQuiz = () => {
    setQuizSelected(!quizSelected);
  }

  const keepScore = () => {
    setScore(score + 1)
  }

  const imFeelingLucky = () => {
    const min = 0;
    const max = allQuizzes.length - 1;
    const randomQuiz = allQuizzes[Math.floor(Math.random() * (max - min) + min)];
    const randomQuizName = randomQuiz.quizName;
    setQuiz(randomQuizName);
    chosenQuiz();
  }

  return (
  <BaseLayout>
    {pageStatus === 'start'
    ?
    <Start
      allQuizzes={allQuizzes}
      quiz={quiz}
      quizSelected={quizSelected}
      changeStatusForward={changeStatusForward}
      changeStatusBackward={changeStatusBackward}
      chooseQuiz={chooseQuiz}
      chosenQuiz={chosenQuiz}
      imFeelingLucky={imFeelingLucky}
    />
    :
    pageStatus === 'quiz'
    ?
    <Quiz
      quiz={quiz}
      allQuizzes={allQuizzes}
      changeStatusForward={changeStatusForward}
      changeStatusBackward={changeStatusBackward}
      score={score}
      keepScore={keepScore}
      report={report}
    />
    :
    pageStatus === 'results'
    ?
    <Results
      changeStatusForward={changeStatusForward}
      changeStatusBackward={changeStatusBackward}
      score={score}
      quiz={quiz}
      allQuizzes={allQuizzes}
      report={report}
    />
    :
    null }
  </BaseLayout>);
};

export default TakeQuiz;