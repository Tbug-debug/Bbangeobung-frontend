import React from "react";
import styled from "styled-components";

function Admin() {
  return (
    <ReportBox>
      <ReportBoxes>
        <ReportText>리뷰 관련 신고</ReportText>
        <ReportBoxInside></ReportBoxInside>
      </ReportBoxes>
      <ReportBoxes>
        <ReportText>장소 관련 신고</ReportText>
        <ReportBoxInside></ReportBoxInside>
      </ReportBoxes>
    </ReportBox>
  );
}

const ReportBox = styled.div`
  height: 100%;
  padding: 50px;
  overflow: hidden;
`;

const ReportBoxes = styled.div`
  margin-top: 50px;
`;

const ReportBoxInside = styled.div`
  border: 2px solid black;
  height: 300px;
  margin-top: 10px;
`;

const ReportText = styled.span`
  font-size: 40px;
`;

export default Admin;
