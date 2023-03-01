import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

function List({ contents, imgURL, id, categoryArr, mystorecss, likeCount }) {
  let copyArr = [...categoryArr];

  return (
    <>
      <ListLink mystorecss={mystorecss} to={`/detail/${id}`}>
        <ListItems>
          <ImageBox>
            <Image src={imgURL} />
          </ImageBox>
          <ItemInfo mystorecss={mystorecss}>
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
  ${(props) =>
    props.mystorecss &&
    css`
      margin: 0;
      padding: 15px 0;
      background-color: none;
      :not(:last-child) {
        border-bottom: 1px solid black;
        border-radius: 0;
      }
    `}
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0.625rem;
`;

// const HearIcon = styled.div`
//   //border: 1px solid black;
//   position: relative;
//   top: 80px;
//   left: 170px;
//   display: flex;
//   justify-content: center;
//   span {
//     margin-left: 10px;
//     margin-bottom: 10px;
//     font-size: 20px;
//   }
// `;

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
