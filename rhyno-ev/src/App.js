import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

import styled, { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import Product from './components/Product';
import Compare from './components/Compare';
import Prebook from './components/Prebook';
import About from './components/About';
import Contact from './components/Contact';
import Rentals from './components/Rentals';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
  }
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <Header>
      <Logo>
        <Link to="/">Rhyno</Link>
      </Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <ProductsMenu>
          <span>Products</span>
          <ProductsDropdown>
            <DropdownLink to="/product/se03-lite">SE03 Lite</DropdownLink>
            <DropdownLink to="/product/se03">SE03</DropdownLink>
            <DropdownLink to="/product/se03-max">SE03 Max</DropdownLink>
            <DropdownLink to="/compare">Compare All</DropdownLink>
          </ProductsDropdown>
        </ProductsMenu>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/prebook">Pre-book Now</NavLink>
      </Nav>
    </Header>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:name" component={({ match }) => <Product name={match.params.name} />} />
      <Route path="/compare" component={Compare} />
      <Route path="/prebook" component={Prebook} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/rentals" component={Rentals} />
    </Switch>
    <Footer>
      <FooterLink href="#">Privacy Policy</FooterLink>
      <FooterLink href="#">Refund Policy</FooterLink>
      <FooterLink href="#">Website Policy</FooterLink>
      <FooterLink href="#">Contact Us</FooterLink>
      <FooterLink href="#">Products</FooterLink>
      <FooterLink href="#">Career</FooterLink>
      <FooterLink href="#">Rentals</FooterLink>
      <SocialIcon href="https://instagram.com" target="_blank">Instagram</SocialIcon>
      <SocialIcon href="https://linkedin.com" target="_blank">LinkedIn</SocialIcon>
    </Footer>
  </Router>
);

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #252525;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ProductsMenu = styled.div`
  position: relative;
  margin: 0 1rem;
  cursor: pointer;
  span {
    color: white;
  }
`;

const ProductsDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #2c2a2a;
  padding: 1rem;
  display: none;
  ${ProductsMenu}:hover & {
    display: block;
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  margin: 0.5rem 0;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #252525;
  color: white;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  margin: 0.5rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcon = styled.a`
  margin: 0.5rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default App;
