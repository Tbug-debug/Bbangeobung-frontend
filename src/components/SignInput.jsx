import React from 'react';
import styled from 'styled-components';

const SignInput = ({ children, ...props }) => {
  return (
    <>
      <Input {...props}>{children}</Input>
    </>
  );
};

const Input = styled.input`
  height: 39px;
  margin-top: 10px;
  padding-left: 12px;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.input_bg};
  font-size: 19px;
  font-weight: bold;
`;

export default SignInput;
