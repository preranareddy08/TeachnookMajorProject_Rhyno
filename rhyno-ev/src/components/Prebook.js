import React, { useState } from 'react';
import styled from 'styled-components';

const Prebook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'SE03 Lite',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment and pre-booking logic here
    alert('Pre-booking successful!');
  };

  return (
    <PrebookContainer>
      <h1>Pre-book Now</h1>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <label htmlFor="model">Model:</label>
          <select id="model" name="model" value={formData.model} onChange={handleChange}>
            <option value="SE03 Lite">SE03 Lite</option>
            <option value="SE03">SE03</option>
            <option value="SE03 Max">SE03 Max</option>
          </select>
        </InputGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </PrebookContainer>
  );
};

const PrebookContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const InputGroup = styled.div`
  margin: 1rem 0;
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input, select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #f9ed32;
  color: black;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #fff225;
  }
`;

export default Prebook;
