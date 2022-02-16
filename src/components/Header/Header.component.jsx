import React from "react";
import styled from "styled-components";
import Image from "../Image";
import SearchBar from "../SearchBar";
import logo from "../../logo.png";
import "./Header.styles.css";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: #cddd;
  justify-content: between;
  align-items: center;
`;
const SubMenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: end;
  margin-right: 20px;
`;

const CartButton = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid;
  border-radius: 4px;
  background-color: transparent;
  color: white;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Image className="ImageContainer" src={logo} width={100} />
      <SubMenu>
        <SearchBar />
        <CartButton>
          <i className="bi bi-cart" />
        </CartButton>
      </SubMenu>
    </StyledHeader>
  );
};

export default Header;
