import React from "react";
import styled from "styled-components";

const CommentInput = ({ children, ...props }) => {
  return (
    <>
      <CommentInputBox {...props}>{children}</CommentInputBox>
    </>
  );
};

const CommentInputBox = styled.input`
  width: 389px;
  height: 39px;
  padding-left: 10px;
  border: 0;
  border-radius: 15px;
  outline: none;
  background-color: ${({ theme }) => theme.color.input_bg};
  font-size: 15px;
`;

export default CommentInput;
