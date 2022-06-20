import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbComet } from "react-icons/tb";
import axios from "axios";

const PhotoOfDay = (props) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState({});

  const getPhoto = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_api_key}`
      );
      setPhoto(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPhoto();
  }, []);

  console.log(photo);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Heading>Zdjęcie dnia</Heading>
          <Container>
            <Image src={photo.hdurl}></Image>
            <Heading1>{photo.title}</Heading1>
            {show ? (
              <Description>
                <Heading2>
                  Data wykonania zdjęcia: <b>{photo.date}</b>
                </Heading2>
                <Explanation>Opis: {photo.explanation}</Explanation>
                <Copyright>Copyright (c) {photo.copyright}</Copyright>
              </Description>
            ) : (
              <Icon onClick={(e) => setShow(!show)} />
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default PhotoOfDay;

const Icon = styled(TbComet)`
  color: #0b3d91;
  margin: 30px auto;
  width: 100%;
  height: 40px;
  transform: rotate(45deg);
  transition: all 1s ease-in-out;
  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
`;

const Container = styled.div`
  border-radius: 10px;
  border: 1px solid rgba(120, 116, 116);
  background-color: rgb(244, 244, 244);
  margin: 30px 30% 80px 30%;
  padding-bottom: 1%;
  @media (max-width: 768px) {
    margin: 40px 40px 0 40px;
  }
  position: relative;
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #fc3d21; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Heading = styled.h1`
  width: 20%;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  color: rgb(246, 246, 246);
  letter-spacing: 2.5px;
  position: relative;
  padding-bottom: 8px;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;

    background-color: rgb(244, 244, 244);
  }
`;
const Heading1 = styled.h1`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  color: rgb(46, 45, 45);
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  padding: 1%;
  margin: auto;
`;

const Description = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap");
  font-family: "Kdam Thmor Pro", sans-serif;
  padding: 1% 1% 1% 1%;
`;

const Heading2 = styled.div`
  margin-top: 25px;
  letter-spacing: 1.4px;
`;

const Explanation = styled.p`
  font-size: 0.9rem;
  font-weight: 200;
  line-height: 1.5;
  letter-spacing: 1.4px;
  margin-top: 15px;
`;

const Copyright = styled.h4`
  margin-top: 20px;
`;

const Arrow = styled.i`
  width: 0.1%;
  text-align: center;
  margin: auto;
  border: solid black;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;
