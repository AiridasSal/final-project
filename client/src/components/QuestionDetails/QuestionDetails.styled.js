/* Import these in your CSS file */
import styled from 'styled-components';

export const QuestionDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: var(--gray-light-color);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.button`
  background-color: var(--light-color);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: var(--spacing-md);
  &:hover {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`;

export const QuestionTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: var(--spacing-md);
`;

export const QuestionBody = styled.p`
  font-size: 18px;
  margin-bottom: var(--spacing-md);
`;

export const AnswerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-md);
`;

export const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: var(--spacing-xs);
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 2px solid var(--gray-color);
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: var(--spacing-md);
  transition: border-color 0.3s;
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: var(--white-color);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--white-color);
  }
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AnswerAuthor = styled.p`
  font-weight: 500;
  margin-bottom: var(--spacing-xs);
`;

export const AnswerBody = styled.p`
  font-size: 16px;
  margin-bottom: var(--spacing-md);
`;

export const AnswerStats = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const Stat = styled.p`
  margin-right: var(--spacing-md);
`;

export const ReactionButton = styled.button`
  background-color: var(--light-color);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-right: var(--spacing-xs);
  &:hover {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`;
