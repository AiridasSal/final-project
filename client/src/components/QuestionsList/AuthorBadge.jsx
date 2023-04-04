import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const AuthorBadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: var(--white-color);
  font-size: 16px;
  font-weight: 500;
  border-radius: 50%;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover .tooltip {
    opacity: 1;
  }
`;

export const AuthorBadgeTooltip = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  color: var(--white-color);
  font-size: 12px;
  font-weight: 400;
  padding: 6px 8px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
  animation: fade-in 0.3s;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AuthorBadge = ({ author }) => {
  const firstName = author ? author.charAt(0) : 'A';
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <AuthorBadgeWrapper    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}  title={author || 'Anonymous'}>
      {firstName}
      <span
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
        }}
      >
        {author || 'Anonymous'}
        {showTooltip && (
        <AuthorBadgeTooltip className="tooltip">{author}</AuthorBadgeTooltip>
      )}
      </span>

    </AuthorBadgeWrapper>
  );
};

AuthorBadge.propTypes = {
  author: PropTypes.string,
};

export default AuthorBadge;
