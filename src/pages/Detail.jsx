import React from 'react';
import styled from 'styled-components';
import Btn from '../components/Btn';
import Navbar from '../components/Navbar';
import NavWrapper from '../components/NavWrapper';
import { FiChevronLeft } from 'react-icons/fi';
import { MdOutlineReport } from 'react-icons/md';

function Detail() {
  return (
    <DetailBox>
      <NavWrapper>
        <Navbar>
          <FiChevronLeft size={40}></FiChevronLeft>
        </Navbar>
        <Navbar>
          <MdOutlineReport size={37}></MdOutlineReport>
        </Navbar>
      </NavWrapper>
      <DetailContentBox>
        <Mpas>지도</Mpas>
        <ImageAndContentsBox></ImageAndContentsBox>
        <Btn children={'리뷰열기'}></Btn>
      </DetailContentBox>
    </DetailBox>
  );
}

const DetailBox = styled.div`
  //border: .0625rem solid red;
  overflow: auto;
  height: 100%;
`;

const DetailContentBox = styled.div`
  //border: .0625rem solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 50px;
`;

const Mpas = styled.div`
  border: 0.125rem solid black;
  margin-top: 3.125rem;
  height: 18.75rem;
  width: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageAndContentsBox = styled.div`
  border: 0.125rem solid black;
  height: 25rem;
  width: 28.125rem;
  margin-top: 3.125rem;
  margin-bottom: 100px;
`;

export default Detail;
