import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MarsPhoto from "../Components/MarsPhoto";

const Photos = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState(["previous"]);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const getPhoto = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${process.env.REACT_APP_api_key}`
      );
      if (page != 1) {
        setBlocked([]);
      }
      if (!response.data.photos.length) {
        setBlocked(["next"]);
      }

      if (page == 1) {
        setBlocked(["previous"]);
      }

      console.log(blocked);
      // console.log(blocked.indexOf("previous"));
      setPhotos(response.data.photos);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const changePage = (sign) => {
    if (sign == "-") {
      setPage(page - 1);
    }
    if (sign == "+") {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    getPhoto();
  }, []);

  useEffect(() => {
    getPhoto();
  }, [page]);

  return (
    <div>
      <Heading>Zdjęcia wykonane na Marsie</Heading>
      {photos.map((photo) => (
        <>
          <MarsPhoto {...photo} />
        </>
      ))}

      <Paggination>
        <Button
          disabled={blocked.includes("previous")}
          onClick={() => changePage("-")}
        >
          &lt;
        </Button>
        <PageNumber>{page}</PageNumber>
        <Button
          disabled={blocked.includes("next")}
          onClick={() => changePage("+")}
        >
          &gt;
        </Button>
      </Paggination>
    </div>
  );
};

const PageNumber = styled.label`
  color: white;
  height: 30px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const Heading = styled.h2`
  text-align: center;
  width: 350px;
  margin: auto;
  position: relative;
  margin-top: 30px;
  color: rgb(246, 246, 246);
  padding-bottom: 10px;
  &:after {
    position: absolute;
    content: "";
    height: 5px;
    width: 350px;
    bottom: 0;
    left: 0;
    background-color: rgb(246, 246, 246);
  }
`;
const Paggination = styled.div`
  width: 20%;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: rgb(246, 246, 246);
  width: 60px;
  font-weight: 600;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: rgb(180, 180, 180);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(189, 191, 214, 1);
    -moz-box-shadow: 0px 0px 7px 0px rgba(189, 191, 214, 1);
    box-shadow: 0px 0px 7px 0px rgba(189, 191, 214, 1);
  }
  &:disabled {
    cursor: default;
  }
`;

export default Photos;
