import React from 'react';
import styled from 'styled-components';
import { useUser } from '../UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ProfileInfo = styled.div``;

const UserName = styled.h2`
  margin: 0;
  color: #333;
`;

const UserDetail = styled.p`
  margin: 5px 0;
  color: #666;
`;

const UserProfile = () => {
    const { user } = useUser();
    if (!user) {
        return <div>No user data available</div>;
    }
    return (
        <ProfileContainer>
            <ProfileImage src={"https://xsgames.co/randomusers/avatar.php?g=male"} alt={user.name} />
            <ProfileInfo>
                <UserName>{user.name}</UserName>
                <UserDetail>Email: {user.email}</UserDetail>
                <p>Questions asked: {user.questionCount}</p>
                <p>Questions answered: {user.answerCount}</p>
                <p><FontAwesomeIcon icon={faThumbsUp}/>Likes:{user.answersLiked}  <FontAwesomeIcon icon={faThumbsDown} />Dislike:{user.answersDisliked} </p>
                {/* <UserDetail>Location: {user.location}</UserDetail> */}
                {/* Add more user details here if needed */}
            </ProfileInfo>
        </ProfileContainer>
    );
};

export default UserProfile;
