import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Component>
      <Link href="https://www.nasa.gov/">
        <Image src="./nasa1.png"></Image>
        <Label>National Aeronautics and Space Administration</Label>
      </Link>
    </Component>
  );
};

const Link = styled("a")`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  letter-spacing: 1.2px;
`;

const Component = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap");
  font-family: "Kdam Thmor Pro", sans-serif;
  height: 100px;
  width: 600px;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  transition: all 1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const Label = styled.div`
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 90px;
  transition: all 0.5s ease-in-out;
`;

export default Footer;
