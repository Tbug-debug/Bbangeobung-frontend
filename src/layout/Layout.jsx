import React from 'react';
import styled from 'styled-components';
import bongbbang from '../assets/img/bongbbang.png';

const Layout = ({ children }) => {
  return (
    <>
      <LayoutBox>
        <StLogoImg>
          <img src={bongbbang} alt="로고이미지" />
        </StLogoImg>
        <TeamInfo>
          <TeamInfoTest>
            <div>
              <h2>FE </h2>
              <h2>이한결</h2>
              <h2>이현동</h2>
              <h2>최하영</h2>
            </div>
            <div>
              <h2>BE </h2>
              <h2>권성민</h2>
              <h2>손채이</h2>
              <h2>이선옥</h2>
              <h2>김동민</h2>
            </div>
          </TeamInfoTest>
        </TeamInfo>
        <Box>
          <DivLayout2>{children}</DivLayout2>
        </Box>
      </LayoutBox>
    </>
  );
};

const LayoutBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.layout_bg};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Box = styled.div`
  display: flex;
  margin-left: 20%;
  justify-content: center;
  box-shadow: 0 0.3125rem 1.125rem -0.4375rem rgba(0, 0, 0, 0.4);
  z-index: 1;

  @media screen and (max-width: 1000px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 625px) {
    margin: 0 auto;
    width: 100%;
  }
`;

const StLogoImg = styled.div`
  position: fixed;
  top: -3vw;
  left: -3vw;
  img {
    width: 50.1354vw;
  }
  @media screen and (max-width: 625px) {
    display: none;
  }
`;

const TeamInfo = styled.div`
  position: fixed;
  bottom: 3.125rem;
  left: 12.5rem;
  font-family: 'KCC-Ganpan';
  @media screen and (max-width: 625px) {
    display: none;
  }
`;

const TeamInfoTest = styled.div`
  display: flex;
  width: 328px;
  justify-content: space-around;
`;

const DivLayout2 = styled.div`
  @media screen and (max-width: 420px) {
    width: 100%;
    margin: auto;
  }
  width: 31.25rem;
  height: 100vh;
  position: relative;
  margin-left: 0 auto;
  background-color: ${({ theme }) => theme.color.component_bg};
  display: flex;
  flex-direction: column;
  z-index: 1;
  box-shadow: 0 0.3125rem 1.125rem -0.4375rem rgba(0, 0, 0, 0.4);
`;

export default Layout;
