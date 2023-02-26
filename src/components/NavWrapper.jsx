import React from "react";
import styled from "styled-components";

const NavWrapper = ({ children }) => {
  return (
    <>
      <NavbarWrapper>{children}</NavbarWrapper>
    </>
  );
};

const NavbarWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 500px;
  background-color: ${({ theme }) => theme.color.nav_bg};
  z-index: 10;
`;

export default NavWrapper;
