import React from 'react';
import styled from 'styled-components';

const NavWrapper = ({ children }) => {
  return (
    <>
      <NavbarWrapper>{children}</NavbarWrapper>
    </>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.color.nav_bg};
`;

export default NavWrapper;
