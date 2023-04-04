import styled from 'styled-components';

export const QuestionFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--gray-light-color);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-md);
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: var(--spacing-xs);
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid var(--gray-color);
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 2px solid var(--gray-color);
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s;
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--error-color);
  font-size: 14px;
  margin-top: var(--spacing-md);
`;
