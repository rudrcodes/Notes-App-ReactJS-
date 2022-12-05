import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  /* position: absolute; */
  /* bottom: 0; */
  margin-top: 10px;
  background-color: #E71D36;
  color: #000;
  padding: 10px;
  /* width:90vw; */
  & h2 {
    font-size: 1rem;
    & a{
        text-decoration: none;
        color:#151515;
        transition: all 300ms ease;
        &:hover{
            color:#E9D758
        }
    }
  }
`;
export const Footer = () => {
  return (
    <Foot>
      <h2>
        Made by 👽{" "}
        <a target="blank" href="https://rudransh.netlify.app/">
          Rudransh Aggarwal
        </a>
      </h2>
    </Foot>
  );
};
