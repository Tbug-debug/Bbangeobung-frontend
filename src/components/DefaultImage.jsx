import React from "react";
import styled, { keyframes } from "styled-components";
import bongbbang from "../assets/img/bongbbang.png";

const DefaultImage = () => {
  return (
    <>
      <ImgBg>
        <DefaultUserImage src={bongbbang}></DefaultUserImage>
      </ImgBg>
    </>
  );
};

const imgAni = keyframes`
0%,
100% {
transform: translateX(0%);
transform: translateX(0%);
transform-origin: 50% 50%;
transform-origin: 50% 50%;
}
15% {
transform: translateX(-30px) rotate(-6deg);
transform: translateX(-30px) rotate(-6deg);
width: 250px;
height: 250px;
}
30% {
transform: translateX(15px) rotate(6deg);
transform: translateX(15px) rotate(6deg);
width: 250px;
height: 250px;
}
45% {
transform: translateX(-15px) rotate(-3.6deg);
transform: translateX(-15px) rotate(-3.6deg);

width: 250px;
height: 250px;
}
60% {
transform: translateX(9px) rotate(2.4deg);
transform: translateX(9px) rotate(2.4deg);
width: 250px;
height: 250px;
}
75% {
transform: translateX(-6px) rotate(-1.2deg);
transform: translateX(-6px) rotate(-1.2deg);
}
`;

const ImgBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-top: 120px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.layout_bg};
`;

const DefaultUserImage = styled.img`
  width: 200px;
  height: 200px;
  animation: ${imgAni} 1.3s both infinite;
  transform-origin: 50% 50%;
`;

export default DefaultImage;
