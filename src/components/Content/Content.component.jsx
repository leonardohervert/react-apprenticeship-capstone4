import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Products from "../Products";
import Banner from "../Banner";

const StyledBody = styled.div`
  width: 100%;
  padding-bottom: 30px;
`;

const Content = ({ children, ...props }) => {
  return (
    <StyledBody>
      <Banner />
      <Carousel />
      <Products />
      {children}
    </StyledBody>
  );
};

export default Content;
