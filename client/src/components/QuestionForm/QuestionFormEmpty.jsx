import React, { useState } from 'react';
import {
  Button,
  BackButton,
  SubmitButton,
  ReactionButton,
  DeleteButton,
} from '../Button/Button.Styled';
import {
  QuestionFormWrapper,
  FormGroup,
  Label,
  Input,
  TextArea,
} from './QuestionForm.styled';

const QuestionForm = ({ title, body, onSubmit }) => {
  const [formTitle, setFormTitle] = useState(title);
  const [formBody, setFormBody] = useState(body);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title: formTitle, body: formBody });
  };

  return (
    <QuestionFormWrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            placeholder="Title"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Body">Body</Label>
          <TextArea
            placeholder="Body"
            value={formBody}
            onChange={(e) => setFormBody(e.target.value)}
          />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </QuestionFormWrapper>
  );
};

export default QuestionForm;
