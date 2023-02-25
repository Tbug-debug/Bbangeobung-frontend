import React from 'react';
import styled from 'styled-components';

function Navbar({ children }) {
  return (
    <NavBar>
      <NavBarIcon>{children}</NavBarIcon>
    </NavBar>
  );
}

const NavBar = styled.div`
  height: 80px;
`;

const NavBarIcon = styled.div`
  margin: 20px 25px;
`;

export default Navbar;
