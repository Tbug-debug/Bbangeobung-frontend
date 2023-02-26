import React from "react";
import styled from "styled-components";
import NavWrapper from "../components/NavWrapper";
import Navbar from "../components/Navbar";
import { FiChevronLeft } from "react-icons/fi";

function user() {
  return (
    <>
      <NavWrapper>
        <Navbar>
          <FiChevronLeft size={40}></FiChevronLeft>
        </Navbar>
      </NavWrapper>
      <UserHeader>
        <UserImageBannerBox>
          <UserImageBanner></UserImageBanner>
        </UserImageBannerBox>
        <UserBox>
          <UserInfo>
            <UserNicName>닉네임</UserNicName>
          </UserInfo>
          <UserInfo>
            <UserImail>유저 이메일</UserImail>
          </UserInfo>
          <UserWriteInfo>
            <div>내가쓴 목록</div>
          </UserWriteInfo>
        </UserBox>
      </UserHeader>
    </>
  );
}
const UserHeader = styled.div`
  height: 100%;
  margin-top: 50px;
  text-align: center;
  overflow: hidden;
`;

const UserImageBannerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.125rem;
`;

const UserImageBanner = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  background-color: yellow;
`;

const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UserInfo = styled.div`
  width: 25rem;
  height: 6.25rem;
  margin-top: 4.375rem;
  background-color: ${({ theme }) => theme.color.item_bg};
  border-radius: 1.25rem;
`;

const UserWriteInfo = styled.div`
  width: 25rem;
  height: 12.5rem;
  margin-top: 4.375rem;
  background-color: ${({ theme }) => theme.color.item_bg};
  border-radius: 1.25rem;
`;

const UserNicName = styled.div``;

const UserImail = styled.div``;

export default user;
