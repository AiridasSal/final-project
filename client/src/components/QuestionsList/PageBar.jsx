import styled from 'styled-components';

const PageBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-lg);
`;

const PageButton = styled.button`
  font-size: 1rem;
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: ${props => props.disabled ? 'var(--secondary-color)' : 'var(--white-color)'};
  color: ${props => props.disabled ? 'var(--white-color)' : 'var(--primary-color)'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`;

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <PageBar>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={index}
          onClick={() => handlePageChange(index + 1)}
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </PageButton>
      ))}
    </PageBar>
  );
};

export default Pagination;
