import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #cddd;
  color: #ddddd;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 0px;
`;

const Footer = ({ ...props }) => {
  return (
    <Container {...props}>
      <span>Ecommerce created during Wizeline’s Academy React Bootcamp</span>
    </Container>
  );
};

export default Footer;
