import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: var(--purple);
  width: 30%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
`;

const AddQuestionModal = ({ toggleModal, setToggleModal }) => {
  const handleQuestionSubmit = () => {
    console.log('handle this');
  };

  return (
    <Modal>
      <Form onSubmit={handleQuestionSubmit}>
        <button
          onClick={() => {
            setToggleModal(false);
          }}
        >
          x
        </button>
        <input type='text' placeholder='Question'></input>
        <br></br>
        <label></label>
        <input type='text' placeholder='Answer'></input>
        <input type='checkbox'></input>

        <br></br>
        <input type='text' placeholder='Answer'></input>
        <input type='checkbox'></input>

        <br></br>
        <input type='text' placeholder='Answer'></input>
        <input type='checkbox'></input>

        <br></br>
        <input type='text' placeholder='Answer'></input>
        <input type='checkbox'></input>
        <button>Add Question</button>
      </Form>
    </Modal>
  );
};

export default AddQuestionModal;
