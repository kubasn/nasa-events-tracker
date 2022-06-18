import React from "react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const LocationMarker = ({ lat, lng, onClick, type }) => {
  console.log(type, setType());
  return (
    <Component onClick={onClick}>
      <LocationIcon icon={setType(type)} />
    </Component>
  );
};

const setType = (type) => {
  if (type == "Drought") return "openmoji:drought";
  if (type == "Floods") return "openmoji:flood";
  if (type == "Volcanoes") return "openmoji:volcano";
  if (type == "Wildfires") return "emojione-v1:fire";
};

const Component = styled.div``;

const LocationIcon = styled(Icon)`
  font-size: 1.5rem;
  color: red;
`;

export default LocationMarker;
