import React from "react";
import { FiMenu, FiEdit } from "react-icons/fi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { showStore } from "../api/api";
import List from "./List";
import Navbar from "./Navbar";
import NavWrapper from "./NavWrapper";

function Mainpages() {
  const { data, isLoading, isError } = useQuery("list", showStore);

  function onSucces(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "ace92e82f7eba726c0d6706f0a692881";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    console.log(url);
  }

  function onFailure() {
    alert("위치 정보를 찾을수가 없습니다.");
  }

  navigator.geolocation.getCurrentPosition(onSucces, onFailure);

  return (
    <MainPageList>
      <NavWrapper>
        <Navbar>
          <Link to={"/register"}>
            <FiEdit size={40} />
          </Link>
        </Navbar>
        <Navbar>
          <FiMenu size={40} />
        </Navbar>
      </NavWrapper>
      <ListBox>
        {data?.data?.data.map((a) => {
          const price = a.itemList[a.itemList.length - 1]?.price;

          return (
            <List
              key={a.id}
              contents={a.content}
              imgURL={a.imageURL}
              price={price}
              id={a.id}
            />
          );
        })}
      </ListBox>
    </MainPageList>
  );
}

const MainPageList = styled.div`
  height: 100%;
  overflow: auto;
`;

const ListBox = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export default Mainpages;
