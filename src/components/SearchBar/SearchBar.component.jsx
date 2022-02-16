import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  align-items: center;
  position: relative;
`;

const StyledInput = styled.input`
  padding-left: 30px;
  border-radius: 5px;
  border: none;
  min-height: 25px;
`;

const StyledImg = styled.i`
  position: absolute;
  left: 0;
  top: 5px;
  padding: 0px 7px;
`;

const SearchBar = ({ ...props }) => {
  const { className } = props;
  return (
    <StyledDiv className={className}>
      <StyledImg className="bi bi-search" />
      <StyledInput placeholder="Search" />
    </StyledDiv>
  );
};

export default SearchBar;
