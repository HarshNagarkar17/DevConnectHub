import React from 'react';
import styled from 'styled-components';
import "./style.css"
import {Link} from "react-router-dom"
const RegisterFormWrapper = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #15202B; /* Dark background color */
  color: #fff; /* Light text color */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const RegisterForm = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #192734; /* Slightly lighter background color */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #1da1f2; /* Twitter's blue color */
`;

const Label = styled.label`
  font-size: 14px;
  color: #1da1f2; /* Twitter's blue color */
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #33444E; /* Darker border color */
  background-color: #33444E; /* Darker background color */
  border-radius: 4px;
  color: #fff; /* Light text color */
`;

const Button = styled.button`
  background-color: #1da1f2; /* Twitter's blue color */
  color: #fff;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0f81da; /* Slightly darker blue on hover */
  }
`;

const SignInLink = styled.p`
  text-align: center;
  margin-top: 10px;
  font-weight: 100;
`;

const Login = () => {
  return (
    <RegisterFormWrapper>
      <RegisterForm>
        <Title>Join projectX</Title>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email" required />
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Password" required />
        <Button>Sign In</Button>
        <SignInLink>Don't have an account? <Link to="/register">SignUp</Link></SignInLink>
      </RegisterForm>
    </RegisterFormWrapper>
  );
};

export default Login;