import React from 'react';
import styled from 'styled-components';
import Btn from '../components/Btn';
import SignInput from '../components/SignInput';
import { useNavigate } from 'react-router-dom';
import useLoginInput from '../hooks/useLoginInput';

const Signup = () => {
  const navigate = useNavigate();

  const idReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [inputId, inputIdHandler, alertId, checkIdReg] = useLoginInput('', 'Email을 입력해줭', 'Email 형식으로 작성해줭', '고마웡', idReg);

  const pwReg = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?!.*\s).{8,20}$/;
  const [inputPassword, inputPasswordHandler, alertPw, checkPwReg] = useLoginInput(
    '',
    'Password를 입력해줭',
    '영어 소문자와 숫자, 특수문자 조합의 8-20자로 입력해줭',
    '고마웡',
    pwReg
  );
  const [inputCheckPw, , alertCheckPw, checkPwRegs, checkSamePw] = useLoginInput(
    '',
    '위와 같은 Password를 입력해줭',
    '달랑 😢',
    '고마웡',
    pwReg,
    inputPassword
  );

  const userNameReg = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9]{2,}$/;
  const [inputUserName, inputUserNameHandler, alertUserName, checkUserNameReg] = useLoginInput(
    '',
    '닉네임을 정해줭',
    '특수문자 제외하고 2글자 이상으로 해줭',
    '고마웡',
    userNameReg
  );

  return (
    <>
      <SignupContainer>
        <SignupTitle>회원가입</SignupTitle>
        <InputWrapper>
          <SignSpan>Email</SignSpan>
          <SignInput value={inputId} onChange={inputIdHandler} />
          <CheckReg checkReg={checkIdReg}>{alertId}</CheckReg>
          <SignSpan>Password</SignSpan>
          <SignInput value={inputPassword} onChange={inputPasswordHandler} type="password" />
          <CheckReg checkReg={checkPwReg}>{alertPw}</CheckReg>
          <SignSpan>Password Check</SignSpan>
          <SignInput value={inputCheckPw} onChange={checkSamePw} type="password" />
          <CheckReg checkReg={checkPwRegs}>{alertCheckPw}</CheckReg>
          <SignSpan>Nick Name</SignSpan>
          <SignInput value={inputUserName} onChange={inputUserNameHandler} />
          <CheckReg checkReg={checkUserNameReg}>{alertUserName}</CheckReg>
        </InputWrapper>
        <BtnWrapper>
          <Btn onClick={() => navigate(-1)} smBtn danger>
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
