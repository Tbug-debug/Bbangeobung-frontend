import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function List({ contents, imgURL, price, id }) {
  return (
    <Lists>
      <StyledLink to={`/detail/${id}`}>
        <ListItems>
          <div>
            <Image src={imgURL} />
          </div>
          <ListItemPriceAndContent>
            <div>{contents}</div>
            <div>{price}원</div>
          </ListItemPriceAndContent>
        </ListItems>
      </StyledLink>
    </Lists>
  );
}

const Lists = styled.div`
  font-family: "KCC-Ganpan";
  width: 25rem;
  height: 5rem;
  margin: 2rem;
  background-color: ${({ theme }) => theme.color.item_bg};
  border-radius: 1.25rem;
`;

const ListItemPriceAndContent = styled.div`
  //border: 0.0625rem solid red;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItems = styled.div`
  //border: 0.0625rem solid black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const StyledLink = styled(Link)`
  display: flelx;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default List;
