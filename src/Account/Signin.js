import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #1a202c;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const ErrorMessage = styled.p`
  color: #ff5757;
  font-size: 0.875rem;
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: #f39c12;
  color: white;
  font-size: 1rem;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e67e22;
  }
`;

const SuccessMessage = styled.p`
  color: #2ecc71;
  font-size: 1rem;
  margin-top: 20px;
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Create a password");
    }

    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Container>
      <FormContainer>
        {successMsg ? (
          <SuccessMessage>{successMsg}</SuccessMessage>
        ) : (
          <form>
            <Title>Sign In</Title>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="john@workemail.com"
              />
              {errEmail && <ErrorMessage>{errEmail}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Create password"
              />
              {errPassword && <ErrorMessage>{errPassword}</ErrorMessage>}
            </FormGroup>

            <Button onClick={handleSignUp}>Sign In</Button>

            <p>
              Don't have an Account?{" "}
              <Link to="/signup">Sign up</Link>
            </p>
          </form>
        )}
      </FormContainer>
    </Container>
  );
};

export default SignIn;
