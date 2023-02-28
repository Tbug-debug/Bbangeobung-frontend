import React from "react";
import styled from "styled-components";
import NavWrapper from "../components/NavWrapper";
import Navbar from "../components/Navbar";
import { FiChevronLeft } from "react-icons/fi";
import DefaultImage from "../components/DefaultImage";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { myStore } from "../api/api";
import Cookies from "js-cookie";
import List from "../components/List";

function User() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = Cookies.get("access_token");
  const { data } = useQuery("myStoreList", () => myStore({ token }));
  const myStoreListArr = data?.data;
  return (
    <>
      <NavWrapper>
        <Navbar>
          <Link to={-1}>
            <FiChevronLeft size={40}></FiChevronLeft>
          </Link>
        </Navbar>
      </NavWrapper>
      <UserInfoContainer>
        <DefaultImage></DefaultImage>
        <UserInfoWrapper>
          <UserTextBox>
            <h2>닉네임</h2>
            <h2>{userInfo.userName}</h2>
          </UserTextBox>
          <UserTextBox>
            <h2>이메일</h2>
            <h2>{userInfo.userEmail}</h2>
          </UserTextBox>
          <h2>내가 쓴 목록</h2>
          <UserPostList>
            {myStoreListArr?.map((item) => {
              return (
                <List
                  key={item.id}
                  contents={item.content}
                  imgURL={item.imageURL}
                  id={item.id}
                  categoryArr={item.itemList}
                  myStore="true"
                ></List>
              );
            })}
          </UserPostList>
        </UserInfoWrapper>
      </UserInfoContainer>
    </>
  );
}

const UserInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: auto;
  padding-bottom: 20px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  :first-child {
    margin-top: 20px;
  }
  h2:last-child {
    padding: 20px 30px;
    background-color: ${({ theme }) => theme.color.item_bg};
    border-radius: 17px;
  }
`;

const UserPostList = styled.div`
  margin-top: 20px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.item_bg};
  border-radius: 17px;
`;

export default User;
