import React, { useState, useEffect } from 'react';
import AddQuestionModal from './createComponents/AddQuestionModal.jsx';
import styled from 'styled-components';

const NewQuiz = styled.div`
  margin: var(--standard-margin);
  padding: var(--standard-padding);
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 30% 70%;
`;

const Gallery = styled.div`
  display: grid;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  padding: 15px;
  gap: 15px;
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
`;

const QuizName = styled.input``;

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
`;

const CreatedQuestions = styled.div`
  height: 10%;
  grid-column: 2 / span 1;
  margin: var(--standard-margin);
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
        //console.log(response.data);
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
    setNewQuizBanner(event.target.value);
  };

  const bannerOptions = [
    'https://image.shutterstock.com/image-photo/banner-cat-web-header-template-260nw-1030847524.jpg',
    'https://thumbs.dreamstime.com/b/adorable-white-cats-banner-adorable-white-cats-banner-cartoon-style-171756834.jpg',
    'https://image.shutterstock.com/image-photo/closeup-portrait-group-cats-different-260nw-601071197.jpg',
  ];
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
              <div>
                <div>{question.question}</div>
                <div>{question.correctAnswer}</div>
                <div>{question.incorrectAnswers[0]}</div>
                <div>{question.incorrectAnswers[1]}</div>
                <div>{question.incorrectAnswers[2]}</div>
              </div>
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
          <option value='Category1'>Category1</option>
          <option value='Category2'>Category2</option>
          <option value='Category3'>Category3</option>
          <option value='Category4'>Category4</option>
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
