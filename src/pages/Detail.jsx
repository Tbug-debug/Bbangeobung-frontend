import React from "react";
import styled from "styled-components";
import Btn from "../components/Btn";
import Navbar from "../components/Navbar";

function Detail() {
  return (
    <DetailBox>
      <Navbar registration={"등록하기 아이콘"} menue={"메뉴 아이콘"} />
      <DetailContentBox>
        <Mpas>지도</Mpas>
        <ImageAndContentsBox></ImageAndContentsBox>
        <Btn children={"리뷰열기"}></Btn>
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
