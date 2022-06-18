import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Container>
      <Image src="./nasa1.png"></Image>
      <NavLink to="/">
        <Component>START</Component>
      </NavLink>
      <NavLink to="/photos">
        <Component>ZDJECIA</Component>
      </NavLink>
      <NavLink to="/fires">
        <Component>POZARY</Component>
      </NavLink>
    </Container>
  );
};

export default Menu;

const Component = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap");
  font-family: "Kdam Thmor Pro", sans-serif;
  width: 150px;
  height: 40px;
  color: rgb(244, 244, 244);
  border-radius: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.5px;
  font-weight: 500;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: rgb(244, 244, 244);
    transform-origin: bottom left;
    transition: transform 0.5s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  @media (max-width: 768px) {
    width: 100px;
  }
`;

const Image = styled.img`
  width: 120px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;
