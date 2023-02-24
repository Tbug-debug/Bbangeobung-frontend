import React from 'react';
import styled from 'styled-components';
import Btn from '../components/Btn';
import SignInput from '../components/SignInput';

const Signup = () => {
  return (
    <>
      <SignupContainer>
        <SignupTitle>회원가입</SignupTitle>
        <InputWrapper>
          <SignSpan>Email</SignSpan>
          <SignInput />
          <CheckReg>id</CheckReg>
          <SignSpan>Password</SignSpan>
          <SignInput type="password" />
          <CheckReg>password</CheckReg>
          <SignSpan>Password Check</SignSpan>
          <SignInput type="password" />
          <CheckReg>check</CheckReg>
          <SignSpan>Nick Name</SignSpan>
          <SignInput />
          <CheckReg>Nick Name Check</CheckReg>
        </InputWrapper>
        <BtnWrapper>
          <Btn smBtn danger>
            취소
          </Btn>
          <Btn smBtn>회원가입</Btn>
        </BtnWrapper>
      </SignupContainer>
    </>
  );
};

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14vh;
`;

const SignupTitle = styled.h2`
  font-size: 2.5em;
`;

const SignSpan = styled.span`
  margin: 12px 0 0 8px;
`;

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 390px;
`;

const CheckReg = styled.span`
  margin: 6px 0 10px 8px;
  color: ${(props) => (props.checkReg ? '#609966' : props.theme.color.btn_danger)};
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 19px;
`;

export default Signup;
