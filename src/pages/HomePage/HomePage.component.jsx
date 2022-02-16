import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

const StyledHomePage = styled.div`
  background-color: #eeeeee;
`;
const StyledFooter = styled(Footer)``;
const HomePage = () => {
  return (
    <StyledHomePage>
      <Header>WebPage</Header>
      <Content />
      <StyledFooter />
    </StyledHomePage>
  );
};

export default HomePage;
