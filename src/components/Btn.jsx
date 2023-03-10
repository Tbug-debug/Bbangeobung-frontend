import React from "react";
import styled, { css } from "styled-components";

const Btn = ({ children, ...props }) => {
  return (
    <>
      <BtnStyle onClick={props.deleteItem} {...props}>
        {children}
      </BtnStyle>
    </>
  );
};

const BtnStyle = styled.button`
  font-family: "KCC-Ganpan";
  width: 23.4375rem;
  height: 2.4375rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.btn_success};
  font-weight: bold;
  cursor: pointer;
  ${(props) =>
    props.smBtn &&
    css`
      width: 11.6875rem;
      height: 2.4375rem;
    `}
  ${(props) =>
    props.danger &&
    css`
      background-color: ${({ theme }) => theme.color.btn_danger};
    `}
  ${(props) =>
    props.signUp &&
    css`
      background-color: ${({ theme }) => theme.color.btn_sign_up};
      color: white;
      &:hover {
        box-shadow: 2px 2px rgb(0, 0, 0, 0.3);
      }
    `}
  ${(props) =>
    props.kakao &&
    css`
      background-color: ${({ theme }) => theme.color.btn_kakao};
    `}
  ${(props) =>
    props.report &&
    css`
      width: 100px;
      margin-top: 20px;
      background-color: ${({ theme }) => theme.color.btn_report};
    `}
    ${(props) =>
    props.delete &&
    css`
      width: 5.375rem;
      height: 2.1875rem;
      background-color: ${({ theme }) => theme.color.btn_danger};
    `}
    ${(props) =>
    props.mainDelete &&
    css`
      width: 23.4375rem;
      height: 2.1875rem;
      background-color: ${({ theme }) => theme.color.btn_danger};
    `}
    ${(props) =>
    props.registerBtn &&
    css`
      margin-top: 50px;
      font-size: 20px;
      background-color: ${({ theme }) => theme.color.btn_success};
    `}
    ${(props) =>
    props.categoryBtn &&
    css`
      width: 60px;
      height: 33px;
      background-color: #7b8fa1;
      color: white;
    `}
    ${(props) =>
    props.commentBtn &&
    css`
      width: 60px;
      height: 39px;
      background-color: ${({ theme }) => theme.color.btn_success};
    `}
    ${(props) =>
    props.signIn &&
    css`
      background-color: ${({ theme }) => theme.color.btn_success};
      color: black;
      &:hover {
        box-shadow: 2px 2px rgb(0, 0, 0, 0.3);
      }
    `}
`;

export default Btn;
