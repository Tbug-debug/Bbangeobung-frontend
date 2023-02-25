import React from 'react';
import { FiMenu, FiEdit } from 'react-icons/fi';
import styled from 'styled-components';
import List from './List';
import Navbar from './Navbar';
import NavWrapper from './NavWrapper';

function Mainpages() {
  return (
    <MainPageList>
      <NavWrapper>
        <Navbar>
          <FiEdit size={40} />
        </Navbar>
        <Navbar>
          <FiMenu size={40} />
        </Navbar>
      </NavWrapper>
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
