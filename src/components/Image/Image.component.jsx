import React from "react";
import styled from "styled-components";

const StImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const Image = ({ alt, ...props }) => {
  return <StImage alt={alt} {...props} />;
};

export default Image;
