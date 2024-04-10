import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--white-color);
  font-size: 16px;
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  margin-top: auto;
  align-self: flex-end;

  &:hover,
  &:focus {
    background-color: var(--secondary-color);
    color: var(--white-color);
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: var(--gray-light);
    color: var(--gray-dark);
    cursor: not-allowed;
  }
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
  background-color: var(--gray-light-color);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const FormGroup = styled.div`
  display: flex;
  padding: var(--spacing-lg) 0;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 24px;

  margin-bottom: var(--spacing-xs);
`;

export const Input = styled.input`
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;
export const SubmitButton = styled(Button)`
  background-color: var(--secondary-color);
  &:hover {
    background-color: var(--primary-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
