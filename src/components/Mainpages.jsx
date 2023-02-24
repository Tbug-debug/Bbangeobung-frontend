import React from "react";
import styled from "styled-components";
import List from "./List";
import Navbar from "./Navbar";

function Mainpages() {
  return (
    <MainPageList>
      <Navbar registration={"등록하기 아이콘"} menue={"메뉴 아이콘"} />
      <ListBox>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
      </ListBox>
    </MainPageList>
  );
}

const MainPageList = styled.div`
  height: 100%;
  overflow: auto;
`;

const ListBox = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Mainpages;
