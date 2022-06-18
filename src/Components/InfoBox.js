import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const InfoBox = (props) => {
  console.log(props);
  return (
    <Box>
      <Header>ID zdarzenia: {props.info.id}</Header>
      <Header1>opis: {props.info.title}</Header1>
      <CloseIcon
        onClick={() => props.closeBox()}
        icon="ant-design:close-circle-filled"
      />
    </Box>
  );
};

const CloseIcon = styled(Icon)`
  position: absolute;
  top: 2px;
  right: 2px;
  color: red;
  cursor: pointer;
`;

const Header = styled.h1`
  font-size: 12px;
  line-height: 1.9em;
`;

const Header1 = styled.h3`
  font-size: 9px;
`;

const Box = styled.div`
  text-transform: uppercase;

  position: absolute;
  top: 60px;
  right: 50px;
  width: 200px;
  min-height: 25px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgb(198, 198, 198);
  border-radius: 3px;
`;

export default InfoBox;
