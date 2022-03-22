import React, { useState, useEffect } from 'react';
import AddQuestionModal from './createComponents/AddQuestionModal.jsx';

const CreateQuiz = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div>
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
        />
      )}
    </div>
  );
};

export default CreateQuiz;
