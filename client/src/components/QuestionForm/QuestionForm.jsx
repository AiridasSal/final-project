import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../fetchdata';
import useRedirect from '../useRedirect';
import { SubmitButton } from '../Button/Button.Styled';
import QuestionsList from '../QuestionsList/QuestionsList';
import {
  QuestionFormWrapper,
  FormGroup,
  Label,
  Input,
  TextArea,
} from './QuestionForm.styled';

const QuestionForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const redirectTo = useRedirect();
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
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
