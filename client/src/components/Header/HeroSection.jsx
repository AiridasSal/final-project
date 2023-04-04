import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeroSectionWrapper = styled.section`
  position: relative;
  background: repeating-linear-gradient(
    135deg,
    var(--primary-color) 0,
    var(--primary-color) 10px,
    var(--secondary-color) 10px,
    var(--secondary-color) 30px,
    var(--success-color) 30px,
    var(--success-color) 50px
  );
  background-size: cover;
  background-position: center;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: var(--white-color);
`;

const HeroTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 4rem;
  margin: 5px 0 0 0;
  padding: 0;
`;
const HeroSubtitle = styled.h2`
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
    <HeroSectionWrapper>
      <HeroOverlay />
      <HeroContent>
        <TitleContainer>
          <HeroTitle>INSIGHTHIVE </HeroTitle>
          <HeroSubtitle>THE COMMUNITY OF CURIOUS MINDS</HeroSubtitle>
        </TitleContainer>
        <NavLink to="/questions/new">
          <HeroButton>Get started</HeroButton>
        </NavLink>
      </HeroContent>
    </HeroSectionWrapper>
  );
};

export default HeroSectionComponent;
