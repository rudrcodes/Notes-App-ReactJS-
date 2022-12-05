import styled from "styled-components";
import React, { useState } from "react";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
const Nav = styled.nav`
  /* background-color: #d6cbcb; */
  border-radius: 5px;
  height: 79px;
  width: 80vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const headingStyle = {
  fontWeight: "bolder",
  letterSpacing: 2,
  fontSize: "2rem",
};
const Right = styled.div``;
const Left = styled.div``;

const Toggle = styled(Classic)`
  background-color: red;
  border-radius: 30%;
  padding: 9px 15px;
  font-size: 30px;
  color: #000;
  @media (max-width: 786px) {
    font-size: 1.4rem;
    padding: 5px 10px;
  }
`;
export const Navbar = ({ themeChanger, isToggled, setToggle }) => {
  let inStyle;
  if (isToggled) {
    inStyle = {
      backgroundColor: "#eae4e4",
      color: "#000",
    };
  } else {
    inStyle = {
      backgroundColor: "#383636",
      color: "#ffff",
    };
  }
  return (
    <Cont>
      <Nav style={inStyle}>
        <Right>
          <h2 style={headingStyle}>NoteIT</h2>
        </Right>
        <Left>
          <Toggle toggled={isToggled} toggle={() => themeChanger()} />
        </Left>
      </Nav>
    </Cont>
  );
};
