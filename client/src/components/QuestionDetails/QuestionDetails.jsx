import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import fetchData from '../fetchdata';
import {
  BackButton,
  SubmitButton,
  ReactionButton,
  DeleteButton,
} from '../Button/Button.Styled';
import {
  QuestionDetailsWrapper,
  QuestionTitle,
  QuestionBody,
  AnswerForm,
  FormLabel,
  FormInput,
  AnswerWrapper,
  AnswerAuthor,
  AnswerBody,
  AnswerStats,
  Stat,
} from './QuestionDetails.styled';
import { UpdatedBadge } from '../QuestionsList/QuestionsList.styled';
import { StyledModal } from '../QuestionsList/QuestionsList.styled';
StyledModal.setAppElement('#root');

const QuestionDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAnswer, setEditingAnswer] = useState(null);
  const [editedAnswerBody, setEditedAnswerBody] = useState('');
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`http://localhost:3000/questions/${id}`);
        const data = await response.json();
        setQuestion(data);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion();
  }, [id]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/questions/${id}/answers`
        );
        const data = await response.json();
        console.log(data);
        setAnswers(data);
      } catch (error) {
        console.error('Error fetching answers:', error);
      }
    };

    fetchAnswers();
  }, [id]);
  const handlQuestionDelete = async () => {
    try {
      await fetchData(`/questions/${id}`, {}, 'DELETE');
      navigate('/');
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchData(`/questions/${id}/answers`, {
        body: newAnswer,
      });
      setAnswers([...answers, data]);
      setNewAnswer('');
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };
  const handleLike = async (answerId) => {
    try {
      const response = await fetchData(
        `/questions/answers/${answerId}/like`,
        {},
        'PATCH'
      );
      const data = await response;
      console.log(data);

      setAnswers(
        answers.map((answer) => (answer._id === answerId ? data : answer))
      );
    } catch (error) {
      console.error('Error liking answer:', error);
    }
  };

  const handleDislike = async (answerId) => {
    try {
      const response = await fetchData(
        `/questions/answers/${answerId}/dislike`,
        {},
        'PATCH'
      );
      const data = await response;
      console.log(data);

      setAnswers(
        answers.map((answer) => (answer._id === answerId ? data : answer))
      );
    } catch (error) {
      console.error('Error disliking answer:', error);
    }
  };
  const handleAnswerDelete = async (answerId) => {
    try {
      setAnswers(answers.filter((answer) => answer._id !== answerId));
      await fetchData(`/questions/answers/${answerId}`, {}, 'DELETE');
    } catch (error) {
      console.error('Error deleting answer:', error);
    }
  };
  const handleAnswerEdit = async (answerId, updatedBody) => {
    try {
      const response = await fetchData(
        `/questions/answers/${answerId}`,
        { body: updatedBody },
        'PATCH'
      );
      const data = await response;
      console.log(data);

      setAnswers(
        answers.map((answer) => (answer._id === answerId ? data : answer))
      );
    } catch (error) {
      console.error('Error editing answer:', error);
    }
  };
  const handleAnswerEditClick = (answerId) => {
    const answerToEdit = answers.find((answer) => answer._id === answerId);
    setEditedAnswerBody(answerToEdit.body);
    setEditingAnswer(answerId);
    setIsModalOpen(true);
  };

  const handleAnswerCancelEdit = () => {
    setEditingAnswer(null);
    setIsModalOpen(false);
  };
  if (!question) {
    return <p>Loading...</p>;
  }

  return (
    <QuestionDetailsWrapper>
      <DeleteButton onClick={() => handlQuestionDelete(id)}>
        {' '}
        Delete
      </DeleteButton>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>

      <QuestionTitle>{question.title}</QuestionTitle>
      <p>Author: {question.author}</p>
      <QuestionBody>{question.body}</QuestionBody>
      <div>
        <h3>Answers:</h3>
        <AnswerForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="new-answer">Add your answer:</FormLabel>
          <FormInput
            id="new-answer"
            type="text"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </AnswerForm>
        {answers.map((answer) => (
          <AnswerWrapper key={answer._id}>
            <StyledModal
              isOpen={isModalOpen}
              onRequestClose={handleAnswerCancelEdit}
              contentLabel="Edit Question"
            >
              {editingAnswer && (
                <div>
                  <h2>Editing answer</h2>
                  <BackButton onClick={handleAnswerCancelEdit}>
                    Cancel
                  </BackButton>

                  <AnswerForm
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleAnswerEdit(editingAnswer, editedAnswerBody);
                      handleAnswerCancelEdit();
                    }}
                  >
                    <FormLabel htmlFor="new-answer">
                      Edit your answer:
                    </FormLabel>
                    <FormInput
                      id="new-answer"
                      type="text"
                      onChange={(e) => setEditedAnswerBody(e.target.value)}
                      value={editedAnswerBody}
                    />
                    <SubmitButton type="submit">Submit</SubmitButton>
                  </AnswerForm>
                </div>
              )}
            </StyledModal>
            <AnswerAuthor>Answer by: {answer.author}</AnswerAuthor>

            <AnswerBody>{answer.body}</AnswerBody>
            <AnswerStats>
              <Stat>Likes: {answer.likesCount}</Stat>
              <Stat>Dislikes: {answer.dislikesCount}</Stat>
              {answer.updated && <UpdatedBadge>Updated</UpdatedBadge>}
              <ReactionButton onClick={() => handleLike(answer._id)}>
                Like
              </ReactionButton>
              <ReactionButton onClick={() => handleDislike(answer._id)}>
                Dislike
              </ReactionButton>
            </AnswerStats>
            <DeleteButton onClick={() => handleAnswerDelete(answer._id)}>
              {' '}
              Delete
            </DeleteButton>
            <SubmitButton onClick={() => handleAnswerEditClick(answer._id)}>
              {' '}
              Edit
            </SubmitButton>
          </AnswerWrapper>
        ))}
      </div>
    </QuestionDetailsWrapper>
  );
};

export default QuestionDetails;
