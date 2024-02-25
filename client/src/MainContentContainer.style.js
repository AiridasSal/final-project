import styled from 'styled-components';

export const MainContentContainer = styled.main`
  max-width: 1200px;

  margin: var(--header-height) auto var(--footer-height) auto;

  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  background-color: transparent;

  // box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

  border-radius: 8px;
`;
