import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../fetchdata';
import useRedirect from '../useRedirect';
import { SubmitButton } from '../Button/Button.Styled';
import QuestionsList from '../QuestionsList/QuestionsList';
import { useUser } from '../UserContext';

import {
  QuestionFormWrapper,
  FormGroup,
  Label,
  Input,
  TextArea,
} from './QuestionForm.styled';

const QuestionForm = ({ onSubmit, }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const redirectTo = useRedirect();
  const {user} = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await fetchData('/questions', { title, body });
      await onSubmit(data);
      redirectTo('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (!user) {
    return (
      <QuestionFormWrapper>
        <h1>Please sign in to ask a question</h1>
      </QuestionFormWrapper>
    );
  }

  return (
    <QuestionFormWrapper>
      <h1>Ask a question</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="body">Body</Label>
          <TextArea
            id="body"
            name="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton style={{ marginLeft: '1.5rem' }} type="submit">
          Submit
        </SubmitButton>
      </form>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {/* Render QuestionsList only when the user is logged in */}
      <QuestionsList />
    </QuestionFormWrapper>
  );
};

QuestionForm.propTypes = {
  onSubmit: PropTypes.func,
};

QuestionForm.defaultProps = {
  onSubmit: () => {},
};

export default QuestionForm;
