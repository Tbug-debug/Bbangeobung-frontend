import React from 'react';
import styled, { css } from 'styled-components';

const Btn = ({ children, ...props }) => {
  return (
    <>
      <BtnStyle {...props}>{children}</BtnStyle>
    </>
  );
};

const BtnStyle = styled.button`
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
    `}
  ${(props) =>
    props.kakao &&
    css`
      background-color: ${({ theme }) => theme.color.btn_kakao};
    `}
  ${(props) =>
    props.report &&
    css`
      background-color: ${({ theme }) => theme.color.btn_report};
    `}
`;

export default Btn;
