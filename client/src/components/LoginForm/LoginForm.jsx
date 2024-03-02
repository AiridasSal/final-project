import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LoginFormWrapper } from './LoginForm.styled';
import { NavLink } from 'react-router-dom';
import { SubmitButton } from '../Button/Button.Styled';
import { FormGroup, Label, Input } from './LoginForm.styled';
import useRedirect from '../useRedirect';
import fetchData from '../fetchdata';
import { useUser } from '../UserContext';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const redirectTo = useRedirect();
  const { login } = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await fetchData('/auth/login', { email, password }, 'POST');
      await onSubmit(data);
      login(data.user);
      redirectTo('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <LoginFormWrapper>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Login</SubmitButton>
      </form>
      {errorMessage && <errorMessage>{errorMessage}</errorMessage>}
      <p>
        Dont have an account?
        <NavLink to={{ pathname: '/register' }}> Register</NavLink>
      </p>
    </LoginFormWrapper>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const LoginPage = () => {
  const handleLogin = async (data) => {
    localStorage.setItem('token', data.token);
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
