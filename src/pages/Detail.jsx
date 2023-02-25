import React, { useEffect } from 'react';
import styled from 'styled-components';
import Btn from '../components/Btn';
import Navbar from '../components/Navbar';
import NavWrapper from '../components/NavWrapper';
import { FiChevronLeft } from 'react-icons/fi';
import { MdOutlineReport } from 'react-icons/md';
import KakaoMapScript from '../util/KakaoMapScript';

function Detail() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

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
        <KakaoMap id="mymap"></KakaoMap>
        <ImageAndContentsBox>image</ImageAndContentsBox>
        <ContentsWrapper>contents</ContentsWrapper>
        <Btn children={'리뷰열기'}></Btn>
      </DetailContentBox>
    </DetailBox>
  );
}

const KakaoMap = styled.div`
  margin-top: 3.125rem;
  height: 18.75rem;
  width: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

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

const ImageAndContentsBox = styled.div`
  border: 0.125rem solid black;
  height: 300px;
  width: 350px;
  margin-top: 3.125rem;
  margin-bottom: 40px;
`;

const ContentsWrapper = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 300px;
  margin-bottom: 30px;
`;

export default Detail;
