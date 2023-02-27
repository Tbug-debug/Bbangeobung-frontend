import React from "react";
import styled from "styled-components";

const CommentList = ({ item }) => {
  return (
    <>
      <CommentWrapper>{item.comment}</CommentWrapper>
    </>
  );
};

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CommentList;
