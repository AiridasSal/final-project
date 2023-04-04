import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeroSection = styled.section`
  background-image: url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-color: var(--gray-color);
  background-size: cover;
  background-position: center;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: var(--spacing-lg);
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

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const HeroSectionComponent = () => {
  return (
    <HeroSection>
      <div>
        <HeroTitle>INSIGHTHIVE <br /> 
        THE COMMUNITY OF CURIUOS MINDS</HeroTitle>
        <NavLink to="/questions/new">
          <HeroButton>Get started</HeroButton>
        </NavLink>
      </div>
    </HeroSection>
  );
};

export default HeroSectionComponent;
