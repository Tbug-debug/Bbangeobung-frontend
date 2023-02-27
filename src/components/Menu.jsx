import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Btn from "../components/Btn";
import useOutSideClick from "../hooks/useOutSideClick";
import bongbbang from "../assets/img/bongbbang.png";

const Menu = ({ onClose }) => {
  const modalRef = useRef(null);
  useOutSideClick(modalRef, onClose);
  return (
    <>
      <MenuOverlay>
        <MenuContainer ref={modalRef}>
          <ImgBg>
            <UserImge src={bongbbang}></UserImge>
          </ImgBg>
          <BtnWrapper>
            <Btn>마이페이지</Btn>
            <Btn danger>로그아웃</Btn>
          </BtnWrapper>
        </MenuContainer>
      </MenuOverlay>
    </>
  );
};

const MenuOverlay = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 100%;
  margin-left: 50px;
  border-radius: 17px 0 0 17px;
  z-index: 12;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.component_bg};
`;

const imgAni = keyframes`
0%,
100% {
transform: translateX(0%);
transform: translateX(0%);
transform-origin: 50% 50%;
transform-origin: 50% 50%;
}
15% {
transform: translateX(-30px) rotate(-6deg);
transform: translateX(-30px) rotate(-6deg);
width: 250px;
height: 250px;
}
30% {
transform: translateX(15px) rotate(6deg);
transform: translateX(15px) rotate(6deg);
width: 250px;
height: 250px;
}
45% {
transform: translateX(-15px) rotate(-3.6deg);
transform: translateX(-15px) rotate(-3.6deg);

width: 250px;
height: 250px;
}
60% {
transform: translateX(9px) rotate(2.4deg);
transform: translateX(9px) rotate(2.4deg);
width: 250px;
height: 250px;
}
75% {
transform: translateX(-6px) rotate(-1.2deg);
transform: translateX(-6px) rotate(-1.2deg);
}
`;

const ImgBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-top: 120px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.layout_bg};
`;

const UserImge = styled.img`
  width: 200px;
  height: 200px;
  animation: ${imgAni} 1.3s both infinite;
  transform-origin: 50% 50%;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  button {
    margin-top: 30px;
  }
`;

export default Menu;
