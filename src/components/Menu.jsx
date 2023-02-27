import React, { useRef } from "react";
import styled from "styled-components";
import Btn from "../components/Btn";
import useOutSideClick from "../hooks/useOutSideClick";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import DefaultImage from "./DefaultImage";

const Menu = ({ onClose }) => {
  const modalRef = useRef(null);
  useOutSideClick(modalRef, onClose);
  const navigate = useNavigate();

  const [, , removeCookie] = useCookies(["access_token"]);

  const logOutHandler = () => {
    removeCookie("access_token");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <>
      <MenuOverlay>
        <MenuContainer ref={modalRef}>
          <DefaultImage />
          <BtnWrapper>
            <Link to="/user/1">
              <Btn>마이페이지</Btn>
            </Link>
            <Btn danger onClick={logOutHandler}>
              로그아웃
            </Btn>
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
