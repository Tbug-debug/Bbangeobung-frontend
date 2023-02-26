import React, { useRef } from "react";
import styled from "styled-components";
import Btn from "../components/Btn";
import useOutSideClick from "../hooks/useOutSideClick";

const Menu = ({ onClose }) => {
  const modalRef = useRef(null);
  useOutSideClick(modalRef, onClose);
  return (
    <>
      <MenuOverlay>
        <MenuContainer ref={modalRef}>
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
  width: 400px;
  height: 100%;
  border-radius: 17px 0 0 17px;
  margin-left: 50px;
  z-index: 12;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.component_bg};
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 30px;
  }
`;

export default Menu;
