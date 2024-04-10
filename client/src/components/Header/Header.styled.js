import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  background-color: var(--primary-color);
  padding: var(--spacing-md) var(--spacing-lg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  height: var(--header-height);
  magin-top: var(--spacing-xxl);
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
export const WidthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Nav = styled.nav`
  flex-grow: 1;
`;

export const Ulist = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: no-wrap;
  list-style-type: none;
  justify-content: flex-end;
  margin: 0;
  padding: 0;



`;

export const ListItem = styled.li`
  align-self: center;
  margin-right: var(--spacing-md);
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 24px;
  color: var(--white-color);
  margin-right: var(--spacing-lg);
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  color: var(--white-color);
  text-decoration: none;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: var(--warning-color);
    // background-color: var(--white-color);
    text-decoration: none;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);

`;

export const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--white-color);
  font-size: 16px;
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &:hover,
  &:focus {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: var(--gray-light);
    color: var(--gray-dark);
    cursor: not-allowed;
  }
`;
export const LogRegContainer = styled.ul`
  list-style-type: none;
  text-align: right;
  justify-content: flex-end;
  display: inline-flex;
`;

export const MobileMenu = styled.a`
  font-size: 24px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: var(--white-color);

  @keyframes myAnim {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    animation: myAnim 0.5s ease 0s 1 normal forwards;
    color: var(--warning-color);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  justfy-content: center;
  align-items: center;
`;
export const BrandName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: var(--white-color);
`;
