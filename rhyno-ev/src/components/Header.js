import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <ProductsDropdown>
        Products
        <DropdownContent>
          <Link to="/products/se03-lite">SE03 Lite</Link>
          <Link to="/products/se03">SE03</Link>
          <Link to="/products/se03-max">SE03 Max</Link>
          <Link to="/compare">Compare All</Link>
        </DropdownContent>
      </ProductsDropdown>
      <Link to="/contact">Contact Us</Link>
      <Link to="/prebook">Pre-book Now</Link>
    </Nav>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  background-color: #252525;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProductsDropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover div {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #3c3c3c;
  min-width: 160px;
  z-index: 1;
  a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: #252525;
    }
  }
`;

export default Header;
