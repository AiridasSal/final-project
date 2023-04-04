import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoText from '../Logo/LogoText';
const HeroSectionWrapper = styled.section`
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  min-height: 500px;
  display: flex;

  align-items: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  max-width: 1248px;
  align-self: center;
  z-index: 1;
  display: flex;
  color: var(--white-color);
  flex-grow: 1;
`;

const HeroButton = styled.button`
  font-size: 1.5rem;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--primary-color);
  color: var(--white-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const HeroSectionComponent = () => {
  return (
    <HeroSectionWrapper>
      <HeroOverlay />
      <HeroContent>
        <LogoText>
          <NavLink to="/questions/new">
            <HeroButton>Get started</HeroButton>
          </NavLink>
        </LogoText>
      </HeroContent>
    </HeroSectionWrapper>
  );
};

export default HeroSectionComponent;
