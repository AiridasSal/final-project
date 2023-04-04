import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledModal, FlexContainer } from './QuestionsList.styled'; // Import the StyledModal from the QuestionsList.styled file
import QuestionForm from '../QuestionForm/QuestionFormEmpty';
import { BackButton } from '../Button/Button.Styled';
const EditQuestionModal = ({ questions, setQuestions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const handleSubmitEdit = async (updatedQuestion) => {
    try {
      const response = await fetchData(
        `/questions/${editingQuestion._id}`,
        updatedQuestion,
        'PATCH'
      );
      const updatedQuestions = questions.map((question) => {
        return question._id === editingQuestion._id ? response : question;
      });
      setQuestions(updatedQuestions);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingQuestion(null);
    setIsModalOpen(false);
  };

  return (
    <StyledModal
      isOpen={isModalOpen}
      onRequestClose={handleCancelEdit}
      contentLabel="Edit Question"
    >
      {editingQuestion && (
        <div>
          <FlexContainer>
            <h2>Editing question</h2>
            <BackButton onClick={handleCancelEdit}>Cancel</BackButton>
          </FlexContainer>
          <QuestionForm
            title={editingQuestion.title}
            body={editingQuestion.body}
            onSubmit={handleSubmitEdit}
            onClick={handleCancelEdit}
          />
        </div>
      )}
    </StyledModal>
  );
};

EditQuestionModal.propTypes = {
  questions: PropTypes.array.isRequired,
  setQuestions: PropTypes.func.isRequired,
};

export default EditQuestionModal;
