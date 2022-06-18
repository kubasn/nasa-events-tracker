import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const LocationLegend = (props) => {
  const [checked, setChecked] = useState([]);

  const onCheck = (event) => {
    event.preventDefault();
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    props.changeFunction(checked);
    //    / console.log(checked);
  };
  return (
    <Component>
      <Heading>Legenda</Heading>
      <Body>
        <Element>
          {" "}
          <LocationIcon icon={locationIcon} />
          Pożary
          <Input
            type="checkbox"
            id="legend"
            name="fire"
            value="Wildfires"
            onChange={onCheck}
          ></Input>
        </Element>
        <Element>
          {" "}
          <LocationIcon icon="emojione:volcano" />
          Wulkany
          <Input
            type="checkbox"
            id="legend"
            name="volcanoe"
            value="Volcanoes"
            onChange={onCheck}
          ></Input>
        </Element>
        <Element>
          {" "}
          <LocationIcon icon="carbon:drought" />
          Susza
          <Input
            type="checkbox"
            id="legend"
            name="drought"
            value="drought"
            onChange={onCheck}
          ></Input>
        </Element>
        <Element>
          {" "}
          <LocationIcon icon="openmoji:flood" />
          Powódź
          <Input
            type="checkbox"
            id="legend"
            name="flood"
            value="flood"
            onChange={onCheck}
          ></Input>
        </Element>
      </Body>
    </Component>
  );
};

const Input = styled.input`
  position: absolute;
  right: 5px;
`;

const LocationIcon = styled(Icon)`
  font-size: 14px;
  margin-right: 5px;

  color: red;
  position: relative;
  top: 1px;
`;
const Heading = styled.h1`
  font-size: 14px;
  text-transform: uppercase;
  color: rgb(80, 80, 80);
`;
const Element = styled.p`
  font-size: 14px;
`;

const Body = styled.div`
  margin-top: 10px;
`;

const Component = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  min-width: 110px;
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 5px;
`;

export default LocationLegend;
