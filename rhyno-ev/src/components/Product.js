import React, { useState } from 'react';
import styled from 'styled-components';

const Product = ({ name }) => {
  const [color, setColor] = useState('default');

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <ProductContainer>
      <h1>{name}</h1>
      <VehicleImage>
        <img src={`/path/to/${color}-vehicle.jpg`} alt={`${name} in ${color}`} />
      </VehicleImage>
      <ColorSelection>
        <button onClick={() => handleColorChange('red')}>Red</button>
        <button onClick={() => handleColorChange('blue')}>Blue</button>
        <button onClick={() => handleColorChange('green')}>Green</button>
      </ColorSelection>
      <BuyNowButton>Buy Now</BuyNowButton>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const VehicleImage = styled.div`
  img {
    width: 300px;
  }
`;

const ColorSelection = styled.div`
  margin: 1rem 0;
  button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #3c3c3c;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #252525;
    }
  }
`;

const BuyNowButton = styled.button`
  padding: 1rem 2rem;
  background-color: #f9ed32;
  color: black;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #fff225;
  }
`;

export default Product;
