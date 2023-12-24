import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f5f5f5;
`;

const CheckoutContainer = styled.div`
  width: 400px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CheckoutForm = styled.form`
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
    border-color: #3498db;
  }

  button {
    width: 100%;
    height: 3rem;
    background-color:orange; /* Green button color */
    color: #ffffff;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  button:hover {
    background-color: #45a049; /* Darker green on hover */
  }
`;

const CheckoutPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement your payment logic here
    alert("Payment Successful!");
  };

  return (
    <Wrapper>
      <CheckoutContainer>
        <CheckoutForm onSubmit={handlePayment}>
          <h1>Checkout</h1>
          <div>
            <label>Credit Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div>
            <label>Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YYYY"
            />
          </div>
          <div>
            <label>CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              placeholder="123"
            />
          </div>
          <button type="submit">Pay with Credit Card</button>
        </CheckoutForm>
      </CheckoutContainer>
    </Wrapper>
  );
};

export default CheckoutPage;
