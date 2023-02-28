import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Btn from "../components/Btn";
import Navbar from "../components/Navbar";
import NavWrapper from "../components/NavWrapper";
import CommentList from "../components/comment/CommentList";
import CommentInput from "../components/comment/CommentInput";
import { FiChevronLeft, FiArrowUp } from "react-icons/fi";
import { MdOutlineReport } from "react-icons/md";
import KakaoMapScript from "../util/KakaoMapScript";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  deleteStore,
  showDetailStore,
  postComment,
  showComment,
} from "../api/api";
import Cookies from "js-cookie";

function Detail() {
  const navigate = useNavigate();
  const token = Cookies.get("access_token");
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data } = useQuery(
    "showDetail",
    () => showDetailStore({ id, token }),
    { staleTime: Infinity }
  );
  const { data: commentList } = useQuery("showPostComment", () =>
    showComment(id)
  );

  const [comment, setComment] = useState("");

  useEffect(() => {
    KakaoMapScript(data?.longitude, data?.latitude);
  }, [data?.latitude, data?.longitude]);

  const dlelteStoreItem = useMutation(deleteStore, {
    onSuccess: () => {
      queryClient.invalidateQueries("list");
      navigate("/");
    },
  });
  function commentSet(e) {
    setComment(e.target.value);
  }

  const postingComment = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("showPostComment");
    },
  });

  function onDelete() {
    dlelteStoreItem.mutate({ token: token, id: id });
  }

  const commentHandler = (e) => {
    e.preventDefault();
    const commentInfo = { comment: comment, storeId: Number(id) };
    postingComment.mutate({ token, commentInfo });
  };

  return (
    <DetailBox>
      <NavWrapper>
        <Navbar>
          <Link to={"/"}>
            <FiChevronLeft size={40}></FiChevronLeft>
          </Link>
        </Navbar>
        <Navbar>
          <MdOutlineReport size={37}></MdOutlineReport>
        </Navbar>
      </NavWrapper>
      <DetailContentBox>
        <KakaoMap id="mymap"></KakaoMap>
        <ContentName>
          <ContentNameText>
            <ContentNameTextTitle>
              {data?.content} : {data?.itemList[0]?.name}
            </ContentNameTextTitle>
            가격: {data?.itemList[0]?.price}원
          </ContentNameText>
        </ContentName>
        <ImageAndContentsBox>
          <ImageSize src={data?.imageURL} />
        </ImageAndContentsBox>
        <CommentListWrapper>
          {commentList?.map((item) => {
            return <CommentList key={item.id} item={item}></CommentList>;
          })}
        </CommentListWrapper>
        <CommentForm onSubmit={commentHandler}>
          <CommentInput
            value={comment}
            onChange={commentSet}
            placeholder="리뷰를 입력해주세요."
          />
          <Btn commentBtn>
            <FiArrowUp size={33} />
          </Btn>
        </CommentForm>
        <DeleteContain>
          <Btn
            deleteItem={onDelete}
            mainDelete
            children={"이 붕어빵은 작성자만 삭제가능해요."}
          ></Btn>
        </DeleteContain>
      </DetailContentBox>
    </DetailBox>
  );
}

const KakaoMap = styled.div`
  margin-top: 50px;
  height: 300px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
`;

const DetailBox = styled.div`
  //border: 1px solid red;
  overflow: auto;
  height: 100%;
`;

const DetailContentBox = styled.div`
  //border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 3.125rem;
`;

const ContentName = styled.div`
  border: 3px solid white;
  border-radius: 30px;
  width: 300px;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "KCC-Ganpan";
`;

const ContentNameText = styled.div`
  //border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentNameTextTitle = styled.div`
  margin-bottom: 5px;
`;

const ImageAndContentsBox = styled.div`
  //border: 2px solid black;
  height: 18.75rem;
  width: 21.875rem;
  margin-top: 3.125rem;
  margin-bottom: 2.5rem;
`;

const ImageSize = styled.img`
  height: 18.75rem;
  width: 21.875rem;
  border-radius: 20px;
`;

const DeleteContain = styled.div`
  //border: 0.0625rem solid black;
  margin-top: 1.875rem;
`;

const CommentListWrapper = styled.div`
  width: 450px;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.item_bg};
`;

const CommentForm = styled.form`
  //border: 0.0625rem solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border-radius: 15px;
  }
`;

export default Detail;
