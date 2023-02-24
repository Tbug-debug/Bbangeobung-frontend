import React from "react";
import styled from "styled-components";

function Navbar({ registration, menue }) {
  return (
    <NavBar>
      <NavBarIcon>{registration}</NavBarIcon>
      <NavBarIcon>{menue}</NavBarIcon>
    </NavBar>
  );
}

const NavBar = styled.div`
  //border: 1px solid black;
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.color.nav_bg};
`;

const NavBarIcon = styled.div`
  padding-top: 20px;
`;

export default Navbar;
