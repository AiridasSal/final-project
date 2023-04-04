import React, { useState } from 'react';
import UserBadge from '../UserBadge/UserBadge';
import { useUser } from '../UserContext';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';

import {
  LogRegContainer,
  HeaderWrapper,
  ListItem,
  Nav,
  NavLink,
  Ulist,
  Container,
  WidthWrapper,
} from './Header.styled';

const Header = () => {
  const location = useLocation();
  const { user, logout } = useUser();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <HeaderWrapper>
          <WidthWrapper>
            <Logo />
            <Nav>
              <Ulist>
                <ListItem>
                  <NavLink to="/">Home</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/questions/new">New Question</NavLink>
                </ListItem>
                {!user && (
                  <LogRegContainer>
                    <ListItem>
                      <NavLink to="/login">Login</NavLink>
                    </ListItem>
                    <ListItem>
                      <NavLink to="/register">Register</NavLink>
                    </ListItem>
                  </LogRegContainer>
                )}
              </Ulist>
            </Nav>
            <Container>
              {user && (
                <>
                  <UserBadge userName={user.name} />
                  <NavLink onClick={handleLogout}>Logout</NavLink>
                </>
              )}
            </Container>
           
          </WidthWrapper>
        </HeaderWrapper>
        
      )}
    </>
  );
};

export default Header;
