import React, { useState, useEffect } from 'react';
import AddQuestionModal from './createComponents/AddQuestionModal.jsx';
import styled from 'styled-components';
import axios from 'axios';
import catBanner from './../banners/catbanner.png';
import forestBanner from './../banners/forestbanner.png';
import historyBanner from './../banners/historybanner.png';
import mapBanner from './../banners/mapbanner.png';
import scienceBanner from './../banners/sciencebanner.png';
import soccerBanner from './../banners/soccerbanner.png';
import splatBanner from './../banners/splatbanner.png';

const NewQuiz = styled.div`
  margin: var(--standard-margin);
  padding: var(--standard-padding);
  display: grid;
  grid-template-rows: 20% 50% 30%;
  grid-template-columns: 30% 70%;
  background-color: var(--yellow);
`;

const ChosenIMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 5px solid green;
  border-radius: var(--standard-border-radius);
`;

const Gallery = styled.div`
  display: grid;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  padding: 15px;
  gap: 15px;
  grid-row-start: 2;
  grid-column: 2 / span 1;
  overflow: scroll;
`;

const QuizName = styled.input``;

const EachQuestion = styled.div`
  background-color: var(--purple);
  border: 5px solid var(--purple);
  border-radius: var(--stadard-border-radius);
  margin: var(--standard-margin);
  padding: var(--standard-padding);
`;

const TextInputs = styled.div`
  grid-row: 1 / span 1;
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 1;
`;

const Description = styled.textarea``;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 5px solid var(--purple);
  border-radius: var(--standard-border-radius);
`;

const CreatedQuestions = styled.div`
  height: 10%;
  grid-column: 2 / span 1;
  margin: var(--standard-margin);
  display: grid;
  grid-template-rows: repeat(10, 200px);
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  gap: 15px;
  overflow: scroll;
  height: 250px;
`;

const AddQButton = styled.button`
  height: 100px;
  width: 200px;
`;

const CreateQuiz = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [newQuizTitle, setNewQuizTitle] = useState('');
  const [newQuizDescription, setNewQuizDescription] = useState('');
  const [newQuizBanner, setNewQuizBanner] = useState('');
  const [newQuizCategory, setNewQuizCategory] = useState('');
  const [newQuizQuestions, setNewQuizQuestions] = useState([]);
  const [quizToPost, setQuizToPost] = useState({
    quizName: '',
    quizQuestions: [],
    category: '',
    quizDescription: '',
    quizBanner: '',
    createdBy: 'stand-in-user',
  });

  const addQuiz = (quizObj) => {
    axios
      .post('http://52.90.8.77:4444/addQuiz', quizObj)
      .then((response) => {
        console.log(response.data);
        resetInputs();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleQuizSubmission = () => {
    setQuizToPost({
      quizName: newQuizTitle, // user - user genenrated
      quizQuestions: newQuizQuestions,
      category: newQuizCategory, // user - select from list
      quizDescription: newQuizDescription, // user - user generated
      quizBanner: newQuizBanner,
      createdBy: 'stand-in-user', // user - based on userName
    });
    //post request
    //reset inputs

    addQuiz(quizToPost);
  };

  const resetInputs = () => {
    setNewQuizTitle('');
    setNewQuizDescription('');
    setNewQuizBanner('');
    setNewQuizCategory('');
    setNewQuizQuestions([]);
    setQuizToPost({
      quizName: '',
      quizQuestions: [],
      category: '',
      quizDescription: '',
      quizBanner: '',
      createdBy: 'stand-in-user',
    });
  };

  const handleCategorySelect = (event) => {
    setNewQuizCategory(event.target.value);
  };

  const bannerOptions = [
    catBanner,
    forestBanner,
    historyBanner,
    mapBanner,
    scienceBanner,
    soccerBanner,
    splatBanner,
  ];

  //const bannerOptions = [
  //  './../banners/catbanner.jpeg',
  //  './../banners/forestbanner.jpeg',
  //  './../banners/historybanner.jpeg',
  //  './../banners/mapbanner.jpeg',
  //  './../banners/sciencebanner.jpeg',
  //  './../banners/soccerbanner.jpeg',
  //  './../banners/splatbanner.jpeg',
  //];
  useEffect(() => {
    console.log(quizToPost);
  }, [quizToPost]);

  return (
    <NewQuiz>
      <CreatedQuestions>
        <h3>Questions In Quiz</h3>
        {newQuizQuestions?.length > 0 &&
          newQuizQuestions.map((question, index) => {
            return (
              <EachQuestion>
                <div>{question.question}</div>
                <div>{question.correctAnswer} - Correct Answer</div>
                <div>{question.incorrectAnswers[0]}</div>
                <div>{question.incorrectAnswers[1]}</div>
                <div>{question.incorrectAnswers[2]}</div>
              </EachQuestion>
            );
          })}
      </CreatedQuestions>
      <TextInputs>
        <label>Quiz Name:</label>
        <QuizName
          type='text'
          placeholder='Quiz Name'
          onChange={() => {
            setNewQuizTitle(event.target.value);
          }}
        ></QuizName>
        <br></br>
        <label>Select a Category:</label>
        <select onChange={handleCategorySelect}>
          <option value='Animals'>Animals</option>
          <option value='Pop Culture'>Pop Culture</option>
          <option value='History'>History</option>
          <option value='Literature'>Literature</option>
          <option value='Just for Fun'>Just for Fun</option>
          <option value='Science'>Science</option>
          <option value='TV and Movies'>TV and Movies</option>
        </select>
        <br></br>
        <label>Quiz Description:</label>
        <Description
          name='DescriptionInput'
          cols='40'
          rows='5'
          onChange={() => {
            setNewQuizDescription(event.target.value);
          }}
        ></Description>
      </TextInputs>
      <Gallery>
        <h3>Select a Banner img</h3>
        {bannerOptions?.map((image, index) => {
          if (image === newQuizBanner) {
            return (
              <ChosenIMG
                onClick={() => {
                  setNewQuizBanner(image);
                }}
                key={index}
                src={image}
              ></ChosenIMG>
            );
          }
          return (
            <IMG
              onClick={() => {
                setNewQuizBanner(image);
              }}
              key={index}
              src={image}
            ></IMG>
          );
        })}
      </Gallery>
      <AddQButton
        onClick={() => {
          setToggleModal(true);
        }}
      >
        Add Question
      </AddQButton>
      <button onClick={handleQuizSubmission}>Submit Quiz</button>
      {toggleModal && (
        <AddQuestionModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          quizToPost={quizToPost}
          newQuizQuestions={newQuizQuestions}
          setNewQuizQuestions={setNewQuizQuestions}
        />
      )}
    </NewQuiz>
  );
};

export default CreateQuiz;
