import React, { useState } from 'react'
import styled from "styled-components"
import "./style.css"
import { Link } from "react-router-dom"
import axios from "axios";
import config from "../config/keys"
import { Error } from "../components/Error"
const RegisterFormWrapper = styled.div`
font-family: "Arial", sans-serif;
background-color: #15202B;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`
const RegisterForm = styled.div`
width: 380px;
padding: 26px;
background-color: #192734; 
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);`

const H2 = styled.h2`
text-align: center;
font-size: 28px;
color: #1da1f2;
margin-bottom:12px; 
`

const Input = styled.input`
width: 95%;
padding: 10px;
margin-bottom: 16px;
border: 1px solid #33444E; 
background-color: #33444E; 
border-radius: 4px;
color: #fff; 
`
const Button = styled.button`
background-color: #1da1f2; 
color: #fff;
width: 100%;
padding: 10px;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover{
    background-color: #0f81da;
}
`
const SignUpLink = styled.p`
  text-align: center;
  margin-top: 10px;
  font-weight: 100;
`;

export const Register = () => {
      const [userData, setUserData] = useState({ username: "", email: "", password: "" });
      const [error, setError] = useState("");
      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setUserData({ ...userData, [name]: value });
      }

      const showError = (errorMessage) => {
            setError(errorMessage)
            setTimeout(() => {
                  setError("");
            }, 2000)
      }
      const submit = (e) => {
            e.preventDefault();
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!emailRegex.test(userData.email)) {
                  showError("Invalid EmailID");
                  return;
            }
            if (!passwordRegex.test(userData.password)) {
                  showError("Weak Password");
                  return;
            }
            axios.post(`${config.api}/register`, userData)
                  .then((res) => {
                        console.log(res);
                  })
                  .catch((err) => {
                        showError(err.response.data.error);
                  })
      }
      return (
            <RegisterFormWrapper>
                  <RegisterForm>
                        <H2>Join projectX</H2>
                        <Error error={error} />
                        <Input type='text' name='username' id='username' placeholder='enter username' onChange={handleInputChange} required />
                        <Input type='email' name='email' id='email' placeholder='enter email' onChange={handleInputChange} required />
                        <Input type='text' name='password' id='password' placeholder='enter password' onChange={handleInputChange} required />
                        <Button onClick={(e) => submit(e)}>Sign Up</Button>
                        <SignUpLink>Already have an account? <Link to="/login" style={{ textDecoration: "none", color: "white" }}>Sign In</Link></SignUpLink>
                  </RegisterForm>
            </RegisterFormWrapper>
      )
}
