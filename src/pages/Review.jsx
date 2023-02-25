import React from "react";
import styled from "styled-components";
import Btn from "../components/Btn";
import Navbar from "../components/Navbar";

function Review() {
  return (
    <ReviewContainer>
      <Navbar registration={"등록하기 아이콘"} menue={"메뉴 아이콘"} />
      <ReviewBox>
        <ReviewImageBox></ReviewImageBox>
        <ReviewTextBox>
          <Btn children={"신고하기"} />
        </ReviewTextBox>
      </ReviewBox>
      <ReviewBox>
        <ReviewImageBox></ReviewImageBox>
        <ReviewTextBox>
          <Btn />
        </ReviewTextBox>
      </ReviewBox>
      <ReviewBox>
        <ReviewImageBox></ReviewImageBox>
        <ReviewTextBox>
          <Btn />
        </ReviewTextBox>
      </ReviewBox>
    </ReviewContainer>
  );
}

const ReviewContainer = styled.div`
  //border: .0625rem solid red;
  height: 100%;
  overflow: auto;
`;

const ReviewBox = styled.div`
  //border: .0625rem solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;
`;

const ReviewImageBox = styled.div`
  border: 0.125rem solid black;
  height: 9.375rem;
  width: 9.375rem;
`;

const ReviewTextBox = styled.div`
  border: 0.125rem solid black;
  height: 15.625rem;
  width: 15.625rem;
`;

export default Review;
