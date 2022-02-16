import React from "react";
import styled from "styled-components";
// import Categories from "../../mocks/es-mx/product-categories.json";
import Carousel from "../Carousel";
import Products from "../Products";
const StyledBody = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const Content = ({ children, ...props }) => {
  return (
    <StyledBody>
      <Carousel />
      {children}
      <Products />
    </StyledBody>
  );
};

export default Content;
