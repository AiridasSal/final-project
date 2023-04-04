import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  background-color: var(--primary-color);
  padding: var(--spacing-md);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: var(--header-height);
  magin-top: var(--spacing-xxl);
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
export const WidthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1248px;
  width: 100%;
`;
export const Nav = styled.nav`
  flex-grow: 1;
`;

export const Ulist = styled.ul`
  display: flex;
  flex-wrap: no-wrap;
  list-style-type: none;
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
  color: var(--white-color);
  margin-right: var(--spacing-lg);
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: var(--white-color);
  text-decoration: none;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: var(--primary-color);
    background-color: var(--white-color);
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
  flex-grow: 1;
  text-align: right;
  justify-content: flex-end;
  display: inline-flex;
`;
