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
    color: var(--primary-color);
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

export const BackButton = styled(Button)`
  background-color: var(--white-color);
  color: var(--black-color);
  border: 1px solid var(--gray-color);
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;

export const SubmitButton = styled(Button)`
  background-color: var(--success-color);

  &:hover {
    background-color: var(--success-color);
    filter: brightness(90%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ReactionButton = styled.button`
  background-color: transparent;
  color: var(--gray-color);
  padding: var(--spacing-xs);
  border: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &.active {
    color: var(--primary-color);
  }

  &:hover {
    color: var(--primary-color);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-right: var(--spacing-xs);
  }
`;
export const DeleteButton = styled.button`
  background-color: var(--danger-color);
  color: var(--white-color);
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--dark-color);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-color: var(--danger-color);
  }
`;
export const PageButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#007bff' : '#f9f9f9')};
  color: ${(props) => (props.disabled ? '#fff' : '#007bff')};
  border: 2px solid #007bff;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #007bff;
    color: #fff;
  }
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: #007bff;
      color: #fff;
    }
  }
`;
