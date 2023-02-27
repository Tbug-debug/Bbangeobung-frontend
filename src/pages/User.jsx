import React from "react";
import styled from "styled-components";
import NavWrapper from "../components/NavWrapper";
import Navbar from "../components/Navbar";
import { FiChevronLeft } from "react-icons/fi";
import DefaultImage from "../components/DefaultImage";

function user() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      <NavWrapper>
        <Navbar>
          <FiChevronLeft size={40}></FiChevronLeft>
        </Navbar>
      </NavWrapper>
      <UserInfoContainer>
        <UserImageBannerBox>
          <DefaultImage></DefaultImage>
          <UserInfoWrapper>
            <UserIdBox>
              <span>닉네임 : </span>
              <span>{userInfo.userName}</span>
            </UserIdBox>
          </UserInfoWrapper>
        </UserImageBannerBox>
      </UserInfoContainer>
    </>
  );
}

const UserInfoContainer = styled.div`
  height: 100%;
  text-align: center;
  overflow: auto;
  padding-bottom: 20px;
`;

const UserImageBannerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserIdBox = styled.div`
  span {
  }
`;

export default user;
