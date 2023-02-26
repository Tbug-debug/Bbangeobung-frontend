import React, { useState, useEffect } from "react";
import { FiMenu, FiEdit } from "react-icons/fi";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { showStore } from "../api/api";
import List from "./List";
import Navbar from "./Navbar";
import NavWrapper from "./NavWrapper";
import Menu from "./Menu";
import isLogin from "../util/token";

function Mainpages() {
  const { data, isLoading, isError } = useQuery("list", showStore);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin() === false) {
      navigate("/login");
    }
  }, []);

  const openMenuHandler = () => {
    setOpenMenu(true);
  };

  return (
    <MainPageList>
      <NavWrapper>
        <Navbar>
          <Link to={"/register"}>
            <FiEdit size={40} />
          </Link>
        </Navbar>
        <Navbar>
          <FiMenu onClick={openMenuHandler} size={40} />
        </Navbar>
      </NavWrapper>
      {isLoading ? (
        <LodingText>붕어빵 로딩중이에붕어</LodingText>
      ) : (
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
      )}
      {openMenu && <Menu onClose={() => setOpenMenu(false)}></Menu>}
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

const LodingText = styled.span`
  font-family: "KCC-Ganpan";
`;

export default Mainpages;
