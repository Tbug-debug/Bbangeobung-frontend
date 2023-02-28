import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

function List({ contents, imgURL, id, categoryArr, category }) {
  let copyArr = [...categoryArr];

  if (category === "팥") {
    copyArr = copyArr.filter((item) => !item.name.includes("슈크림붕어빵"));
  } else if (category === "슈크림") {
    copyArr = copyArr.filter((item) => !item.name.includes("팥붕어빵"));
  }

  return (
    <>
      <ListLink to={`/detail/${id}`}>
        <ListItems>
          <ImageBox>
            <Image src={imgURL} />
          </ImageBox>
          <ItemInfo>
            <Span title="true">가게 정보</Span>
            <Span>{contents}</Span>
            <Span title="true">가격 정보</Span>
            {copyArr.map((item, index) => {
              return (
                <Span key={index}>
                  · {item.name} : {item.price} 원
                </Span>
              );
            })}
          </ItemInfo>
        </ListItems>
      </ListLink>
    </>
  );
}

const ListLink = styled(Link)`
  width: 430px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.item_bg};
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0.625rem;
`;

const ListItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ImageBox = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  border-radius: 17px;
  background-color: ${({ theme }) => theme.color.nav_bg};
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  padding: 8px;
  object-fit: contain;
`;

const Span = styled.span`
  :not(:first-child) {
    margin-top: 15px;
  }
  ${(props) =>
    props.title &&
    css`
      font-size: 23px;
    `}
`;

export default List;
