import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SubmitButton } from '../Button/Button.Styled';

import { FormGroup, Label, Input } from '../QuestionForm/QuestionForm.styled';
import { RegisterFormWrapper } from './RegisterForm.styled';
import useRedirect from '../useRedirect';
import fetchData from '../fetchdata';

const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const redirectTo = useRedirect();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!checkPasswordMatch()) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const data = await fetchData('/auth/register', { name, email, password });
      await onSubmit(data);
      redirectTo('/login');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  function checkPasswordMatch() {
    return password === passwordConfirm;
  }

  return (
    <RegisterFormWrapper>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </FormGroup>
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
        <FormGroup>
          <Label htmlFor="passwordConfirm">Confirm Password</Label>
          <Input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(event) => setPasswordConfirm(event.target.value)}
            required
          />
          {!checkPasswordMatch() && <p>Passwords do not match!</p>}
        </FormGroup>
        <SubmitButton type="submit" disabled={!checkPasswordMatch()}>
          Register
        </SubmitButton>
      </form>
      <p>
        Already have an account?
        <NavLink to={{ pathname: '/login' }}> Login</NavLink>
      </p>
    </RegisterFormWrapper>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const RegisterPage = () => {
  const handleRegister = async (data) => {};

  return (
    <div>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
