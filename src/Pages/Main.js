import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PhotoOfDay from "../Components/PhotoOfDay";
import { selectPhotos } from "../features/photoSlice";

const Main = (props) => {
  // const dispatch = useDispatch();
  //const select = useSelector(selectPhotos);

  return (
    <MainPage>
      <PhotoOfDay />
    </MainPage>
  );
};

const MainPage = styled.div`
  height: 100%;
`;

export default Main;
