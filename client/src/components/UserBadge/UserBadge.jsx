import React from 'react';
import PropTypes from 'prop-types';
import { UserBadgeWrapper } from './UserBadge.styled';

const UserBadge = ({ userName }) => {
  return <UserBadgeWrapper>Logged in as: {userName}</UserBadgeWrapper>;
};

UserBadge.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default UserBadge;
