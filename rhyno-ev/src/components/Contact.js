import React from 'react';
import styled from 'styled-components';

const Contact = () => (
  <ContactContainer>
    <h1>Contact Us</h1>
    <p>Mail: <a href="mailto:info@rhyno.in">info@rhyno.in</a></p>
    <p>Mobile: +91-9023987528</p>
    <p>Location: Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
  </ContactContainer>
);

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
  a {
    color: #f9ed32;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Contact;
