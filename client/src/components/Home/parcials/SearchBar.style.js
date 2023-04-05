import styled from 'styled-components';

export const SearchBarStyled = styled.input`
  padding: var(--spacing-sm) var(--spacing-md);
  margin-top: var(--spacing-lg);
  font-size: 16px;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 467px) {
    width: 100%;
  }
`;
export const Select = styled.select`
  width: 100%;

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
export const Dropdown = styled.select`
  width: 100%;

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
export const Button = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 16px;
  margin-top: var(--spacing-lg);
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }

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

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 1rem;
  background-color: var(--light-color);

  label {
    margin-right: 0.5rem;
    @media (max-width: 467px) {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    & > *:nth-child(-n + 3) {
      margin-right: auto;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-xs);
  gap: var(--spacing-md);
`;
