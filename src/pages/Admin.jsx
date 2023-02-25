import React from "react";
import styled from "styled-components";

function Admin() {
  return (
    <ReportBox>
      <h1>리뷰 관련 신고</h1>
      <ReportBoxInside></ReportBoxInside>
      <h1>장소 관련 신고</h1>
      <ReportBoxInside></ReportBoxInside>
    </ReportBox>
  );
}

const ReportBox = styled.div`
  height: 100%;
  padding: 50px;
  overflow: hidden;
`;

const ReportBoxInside = styled.div`
  border: 2px solid black;
  height: 300px;
`;

export default Admin;
