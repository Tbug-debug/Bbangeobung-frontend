import React, { useState } from 'react';
import Btn from '../components/Btn';
import styled from 'styled-components';
import SignInput from '../components/SignInput';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [alertId, setAlertId] = useState('ID를 입력해줭');
  const [alertPassword, setAlertPassword] = useState('Password를 입력해줭');

  const [checkIdReg, setCheckIdReg] = useState(false);
  const [checkPasswordReg, setCheckPasswordReg] = useState(false);

  const inputIdHandler = (e) => {
    setInputId(e.target.value);
    const idReg = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (!idReg.test(e.target.value)) {
      setAlertId('이메일 형식으로 작성해줭');
      setCheckIdReg(false);
    } else {
      setAlertId('팥이 좋아 슈크림이 좋아?');
      setCheckIdReg(true);
    }
  };

  const inputPasswordHandler = (e) => {
    setInputPassword(e.target.value);
    const passwordReg = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (!passwordReg.test(e.target.value)) {
      setAlertPassword('영어 소문자와 숫자, 특수문자 조합의 8-20자로 입력해줭');
      setCheckPasswordReg(false);
    } else {
      setAlertPassword("나는 타코야키! Mommy don't know~ daddy's getting hot 🔥");
      setCheckPasswordReg(true);
    }
  };

  return (
    <>
      <LogInContainer>
        <Title>빵 어 붕</Title>
        <Form id="userInfoSubmit">
          <SignInput value={inputId} onChange={(e) => inputIdHandler(e)} />
          <CheckReg checkReg={checkIdReg}>{alertId}</CheckReg>
          <SignInput value={inputPassword} onChange={(e) => inputPasswordHandler(e)} type="password" />
          <CheckReg checkReg={checkPasswordReg}>{alertPassword}</CheckReg>
        </Form>
        <BtnWrapper>
          <Btn signUp onClick={() => navigate('/signup')}>
            이메일로 회원가입
          </Btn>
          <Btn kakao>카카오 회원 가입</Btn>
          <Btn type="submit" form="userInfoSubmit">
            로그인 하기
          </Btn>
        </BtnWrapper>
      </LogInContainer>
    </>
  );
}

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 19vh;
`;

const Title = styled.h2`
  font-size: 2.5em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 390px;
`;

const CheckReg = styled.span`
  height: 30px;
  margin: 4px 0 0 8px;
  color: ${(props) => (props.checkReg ? '#609966' : props.theme.color.btn_danger)};
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  button {
    margin-top: 16px;
  }
`;

export default Login;
