import React, { useState, useEffect } from 'react';
import AddQuestionModal from './createComponents/AddQuestionModal.jsx';
import styled from 'styled-components';

const NewQuiz = styled.div`
  margin: var(--standard-margin);
  padding: var(--standard-padding);
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

const Gallery = styled.div`
  display: grid;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  padding: 15px;
  gap: 15px;
  grid-row: 3 / span 1;
`;

const QuizName = styled.input`
  //grid-row: 1 / span 1;
`;

const TextInputs = styled.div`
  grid-row: 1 / span 1;
  display: flex;
  flex-direction: row;
`;

const Description = styled.textarea`
  //grid-row: 2 / span 1;
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CreateQuiz = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [newQuizTitle, setNewQuizTitle] = useState('');
  const [newQuizDescription, setNewQuizDescription] = useState('');
  const [newQuizBanner, setNewQuizBanner] = useState('');
  const [newQuizCategory, setNewQuizCategory] = useState('');
  const quizToPost = {
    quizName: `${newQuizTitle}`, // user - user genenrated
    quizQuestions: [],
    category: `${newQuizCategory}`, // user - select from list
    quizDescription: `${newQuizDescription}`, // user - user generated
    quizBanner: `${newQuizBanner}`,
    createdBy: {}, // user - based on userName
  };

  const handleCategorySelect = (event) => {
    setNewQuizBanner(event.target.value);
  };

  const bannerOptions = [
    'https://image.shutterstock.com/image-photo/banner-cat-web-header-template-260nw-1030847524.jpg',
    'https://thumbs.dreamstime.com/b/adorable-white-cats-banner-adorable-white-cats-banner-cartoon-style-171756834.jpg',
    'https://image.shutterstock.com/image-photo/closeup-portrait-group-cats-different-260nw-601071197.jpg',
  ];

  return (
    <NewQuiz>
      <form>
        <TextInputs>
          <QuizName
            type='text'
            placeholder='Quiz Name'
            onChange={() => {
              setNewQuizTitle(event.target.value);
            }}
          ></QuizName>
          <select onChange={handleCategorySelect}>
            <option value='Category1'>Category1</option>
            <option value='Category2'>Category2</option>
            <option value='Category3'>Category3</option>
            <option value='Category4'>Category4</option>
          </select>
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
          {bannerOptions?.map((image, index) => {
            return <IMG key={index} src={image}></IMG>;
          })}
        </Gallery>
      </form>
      <button
        onClick={() => {
          setToggleModal(true);
        }}
      >
        Add Question
      </button>
      {toggleModal && (
        <AddQuestionModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          quizToPost={quizToPost}
        />
      )}
    </NewQuiz>
  );
};

export default CreateQuiz;
