import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <div>
        <h4>Policies</h4>
        <p>Privacy Policy</p>
        <p>Refund Policy</p>
        <p>Website Policy</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <p>Contact Us</p>
        <p>Products</p>
        <p>Rentals</p>
        <p>Careers</p>
      </div>
      <div>
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://www.linkedin.com">LinkedIn</a>
      </div>
    </FooterContent>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background-color: #131313;
  padding: 2rem;
  color: white;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    h4 {
      margin-bottom: 1rem;
    }
    p, a {
      margin-bottom: 0.5rem;
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Footer;
