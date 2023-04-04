import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { keyframes } from 'styled-components';
export const QuestionsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg);
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: var(--spacing-md);
  align-items: center;
  margin-bottom: var(--spacing-lg);
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: 200px;
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

export const StyledSelect = styled.select`
  width: 100%;
  max-width: 200px;
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

export const QuestionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const QuestionListItem = styled.li`
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  background-color: var(--white-color);
  border: 1px solid var(--gray-dark);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  animation: ${appear} 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const AuthorNameBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: var(--primary-color);
  color: var(--white-color);

  &::first-letter {
    text-transform: uppercase;
  }

  &::last-letter {
    text-transform: uppercase;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;

export const PageBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacing-lg);
`;

export const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background: #fff;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }
`;
// export const UpdatedBadge = styled.span`
//   background-color: #f1c40f;
//   color: #fff;
//   padding: 2px 5px;
//   border-radius: 3px;
//   font-size: 12px;
//   margin-left: 5px;
// `;

const slideIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const QuestionAuthor = styled.p`
  margin-right: var(--spacing-md);
  font-size: 14px;
  color: var(--text-secondary-color);
`;

export const QuestionCreatedAt = styled.p`
  margin-right: var(--spacing-md);
  font-size: 14px;
  color: var(--text-secondary-color);
`;

export const QuestionAnswerCount = styled.p`
  margin-right: var(--spacing-md);
  font-size: 14px;
  color: var(--text-secondary-color);
`;

export const QuestionTitle = styled.h2`
  margin: 0;
  margin-bottom: var(--spacing-xs);
  font-size: 20px;
`;

export const Link = styled(NavLink)`
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const UpdatedBadge = styled.span`
  background-color: var(--success-color);
  color: var(--white-color);
  font-size: 12px;
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 4px;
  margin-left: var(--spacing-sm);
`;
