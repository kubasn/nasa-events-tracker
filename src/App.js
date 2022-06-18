import React, { useEffect } from "react";
import Menu from "./Components/Menu";
import PhotoOfDay from "./Components/PhotoOfDay";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectPhotos, setPhotos } from "./features/photoSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./Pages/Main";
import styled from "styled-components";
import Layout from "./Components/Layout";
import Photos from "./Pages/Photos";
import Footer from "./Components/Footer";
import Fires from "./Components/Fires";
const App = () => {
  const menu = <Menu />;
  const footer = <Footer />;
  const content = (
    <Routes>
      <Route path="/photos" element={<Photos />} />
      <Route path="/fires" element={<Fires />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
  return (
    <Router>
      <Layout menu={menu} footer={footer} content={content} />
    </Router>
  );
};

export default App;
