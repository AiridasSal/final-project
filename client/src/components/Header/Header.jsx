import UserBadge from '../UserBadge/UserBadge';
import { useUser } from '../UserContext';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  LogRegContainer,
  HeaderWrapper,
  ListItem,
  Nav,
  NavLink,
  Ulist,
  Container,
  WidthWrapper,
  LogoContainer,
  BrandName,
  MobileMenu,
} from './Header.styled';

const Header = () => {
  const location = useLocation();
  const { user, logout } = useUser();
  const [menuOpen, setMenuOpen] = useState(true);
  const updateMenuVisibility = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    // Set initial state
    updateMenuVisibility();

    // Add event listener for window resize
    window.addEventListener('resize', updateMenuVisibility);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateMenuVisibility);
  }, []);
  const handleLogout = () => {
    logout();
  };
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Styles for Ulist when the menu is open or closed
  const ulistStyle = menuOpen ? { display: 'flex' } : { display: 'none' };

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <HeaderWrapper>
          <WidthWrapper>
            <Logo />
            <Nav>
              <Ulist style={ulistStyle}>
                <ListItem>
                  <NavLink to="/">Home</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/questions/new">New Question</NavLink>
                </ListItem>
                {!user && (
                  <>
                    <ListItem>
                      <NavLink to="/login">Login</NavLink>
                    </ListItem>
                    <ListItem>
                      <NavLink to="/register">Register</NavLink>
                    </ListItem>
                    </>
                  )}
                    {user && (
                      <>
                    <ListItem><UserBadge userName={user.name} /></ListItem>
                    <ListItem><NavLink onClick={handleLogout}>Logout</NavLink></ListItem>
                    </>
                  
                  
                )}
              </Ulist>
            </Nav>


            <MobileMenu onClick={handleClick}>
              <FontAwesomeIcon icon={faBars} />
            </MobileMenu>
          </WidthWrapper>
        </HeaderWrapper>
      )}
    </>
  );
};

export default Header;
