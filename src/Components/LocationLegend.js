import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import Checkbox from "./UI/Checkbox";

const LocationLegend = (props) => {
  const [checked, setChecked] = useState(["Wildfires"]);

  const onCheck = (check, value) => {
    //event.preventDefault();
    console.log(check, value);
    let updatedList = [...checked];
    if (check) {
      updatedList.push(value);
    } else {
      updatedList.splice(updatedList.indexOf(value), 1);
    }
    setChecked(updatedList);
    console.log(updatedList);
    props.changeFunction(updatedList);
    // console.log(updatedList);
  };
  return (
    <Component>
      <Heading>Legenda</Heading>
      <Body>
        <Element>
          {" "}
          <LocationIcon icon={locationIcon} />
          Pożary
          <Checkbox
            id="legend"
            name="fire"
            value="Wildfires"
            onChange={onCheck}
            checked={true}
          ></Checkbox>
        </Element>
        <Element>
          {" "}
          <LocationIcon icon="emojione:volcano" />
          Wulkany
          <Checkbox
            id="legend"
            name="volcanoe"
            value="Volcanoes"
            onChange={onCheck}
            checked={false}
          ></Checkbox>
        </Element>
        <Element>
          {" "}
          <LocationIcon icon="carbon:drought" />
          Susza
          <Checkbox
            id="legend"
            name="drought"
            value="drought"
            onChange={onCheck}
            checked={false}
          ></Checkbox>
        </Element>
        <Element>
          {" "}
          <LocationIcon icon="openmoji:flood" />
          Powódź
          <Checkbox
            id="legend"
            name="flood"
            value="flood"
            onChange={onCheck}
            checked={false}
          ></Checkbox>
        </Element>
      </Body>
    </Component>
  );
};

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
