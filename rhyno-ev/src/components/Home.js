import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => (
  <HomeContainer>
    <Frontline>
      <h1>Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets <RotatingWords>Style</RotatingWords></h1>
    </Frontline>
    <VehicleImages>
      <img src="/path/to/vehicle1.jpg" alt="Vehicle 1" />
      <img src="/path/to/vehicle2.jpg" alt="Vehicle 2" />
      <img src="/path/to/vehicle2.jpg" alt="Vehicle 3" />
    </VehicleImages>
    <ProductCheckoutButtons>
      <Link to="/products/se03-lite">Check out SE03 Lite</Link>
      <Link to="/products/se03">Check out SE03</Link>
      <Link to="/products/se03-max">Check out SE03 Max</Link>
    </ProductCheckoutButtons>
    <USP>
      <h2>Our USP</h2>
      <USPList>
        <li>LFP Battery</li>
        <li>Wider tyres</li>
        <li>Range prediction</li>
        <li>Extraordinary Experience</li>
        <li>Rugged and simple Design</li>
      </USPList>
    </USP>
    <FloatingButton>
      <Link to="/prebook">Pre-book now</Link>
    </FloatingButton>
  </HomeContainer>
);

const HomeContainer = styled.div`
  padding: 2rem;
`;

const Frontline = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h1 {
    font-size: 2rem;
    color: #f9ed32;
  }
`;

const RotatingWords = styled.span`
  animation: rotate 10s linear infinite;
  @keyframes rotate {
    0% { content: "Style"; }
    20% { content: "Elegance"; }
    40% { content: "Minimalism"; }
    60% { content: "Comfort"; }
    80% { content: "Style"; }
  }
`;

const VehicleImages = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 200px;
    margin: 0 1rem;
  }
`;

const ProductCheckoutButtons = styled.div`
  text-align: center;
  margin: 2rem 0;
  a {
    margin: 0 1rem;
    padding: 1rem 2rem;
    background-color: #3c3c3c;
    color: white;
    text-decoration: none;
    &:hover {
      background-color: #252525;
    }
  }
`;

const USP = styled.div`
  text-align: center;
  margin: 2rem 0;
  h2 {
    margin-bottom: 1rem;
  }
`;

const USPList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 0.5rem;
  }
`;

const FloatingButton = styled.div`
  
  bottom: 1rem;
  right: 1rem;
  a {
    padding: 1rem 2rem;
    background-color: #f9ed32;
    color: black;
    text-decoration: none;
    border-radius: 5px;
    text-align:right;
    &:hover {
      background-color: #fff225;
    }
  }
`;

export default Home;
