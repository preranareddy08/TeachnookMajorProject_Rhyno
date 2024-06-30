import React from 'react';
import styled from 'styled-components';

const Rentals = () => (
  <RentalsContainer>
    <h1>Rentals</h1>
    <p>Textual information about rentals goes here.</p>
  </RentalsContainer>
);

const RentalsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export default Rentals;
