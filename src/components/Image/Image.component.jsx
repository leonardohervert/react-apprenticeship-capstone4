import React from "react";
import styled from "styled-components";

const StImage = styled.img`
  height: auto;
  max-widht: 100%;
`;

const Image = ({ ...props }) => {
  return <StImage {...props} />;
};

export default Image;
