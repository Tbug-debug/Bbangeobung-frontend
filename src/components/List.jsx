import React from "react";
import styled from "styled-components";

function List() {
  return <Lists>List</Lists>;
}

const Lists = styled.div`
  //border: .0625rem solid black;
  font-family: "KCC-Ganpan";
  width: 25rem;
  height: 5rem;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.color.item_bg};
  border-radius: 1.25rem;
  display: flelx;
  justify-content: center;
  align-items: center;
`;

export default List;
