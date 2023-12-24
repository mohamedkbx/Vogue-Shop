import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  background-color: #f5f5f5; /* Set your desired background color */
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #333333;
  }

  label {
    color: #555555;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #cccccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
  }

  input:focus {
    border-color: #3498db; /* Highlight border color on focus */
  }

  button {
    width: 100%;
    height: 3rem;
    background-color: #ff6600; /* Orange button color */
    color: #ffffff;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  button:hover {
    background-color: #e64d00; /* Darker orange on hover */
  }

  button:disabled {
    background-color: #ffd699;
    cursor: not-allowed;
  }

  p {
    font-size: 0.8rem;
    color: #777777;
    a {
      color: #3498db;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #1a5276; /* Darker blue on hover */
        text-decoration: underline;
      }
    }
  }
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  });

  const [checked, setChecked] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const errors = {};

    if (!checked) {
      errors.checked = "Please agree to the terms.";
    }

    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = `Enter your ${key}`;
      } else if (key === "email" && !EmailValidation(formData[key])) {
        errors[key] = "Enter a valid email";
      } else if (key === "password" && formData[key].length < 6) {
        errors[key] = "Passwords must be at least 6 characters";
      }
    }

    if (Object.keys(errors).length === 0) {
      setSuccessMsg(
        `Hello dear ${
          formData.clientName
        }, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${
          formData.email
        }`
      );
      setFormData({
        clientName: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        city: "",
        country: "",
        zip: "",
      });
    } else {
      setErrorMessages(errors);
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        {successMsg ? (
          <div>
            <p>{successMsg}</p>
            <Link to="/signin">
              <button>Sign in</button>
            </Link>
          </div>
        ) : (
          <Form>
            <h1>Create your account</h1>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
              />
              {errorMessages.clientName && (
                <p>{errorMessages.clientName}</p>
              )}
            </div>
            <div>
              <label>Work Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errorMessages.email && <p>{errorMessages.email}</p>}
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errorMessages.phone && <p>{errorMessages.phone}</p>}
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errorMessages.password && (
                <p>{errorMessages.password}</p>
              )}
            </div>
            <div>
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errorMessages.address && <p>{errorMessages.address}</p>}
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errorMessages.city && <p>{errorMessages.city}</p>}
            </div>
            <div>
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              {errorMessages.country && <p>{errorMessages.country}</p>}
            </div>
            <div>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <p>
                I agree to the Hci Project{" "}
                <Link to="/terms" target="_blank">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" target="_blank">
                  Privacy Policy
                </Link>
                .
              </p>
              {errorMessages.checked && (
                <p>{errorMessages.checked}</p>
              )}
            </div>
            <button
              onClick={handleSignUp}
              disabled={!checked}
            >
              Create Account
            </button>
            <p>
              Don't have an Account?{" "}
              <Link to="/signin">Sign in</Link>
            </p>
          </Form>
        )}
      </FormContainer>
    </Wrapper>
  );
};

export default SignUp;
