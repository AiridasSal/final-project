import styled from 'styled-components';

export const ResultList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ResultItem = styled.li`
  border: 1px solid var(--gray-color);
  border-radius: 4px;
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);

  h2 {
    margin: 0;
    margin-bottom: var(--spacing-sm);
  }

  p {
    margin: 0;
    margin-bottom: var(--spacing-sm);
  }

  span {
    margin-right: var(--spacing-sm);
  }

  button {
    margin-top: var(--spacing-sm);
  }
`;
