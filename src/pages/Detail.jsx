import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Btn from "../components/Btn";
import Navbar from "../components/Navbar";
import NavWrapper from "../components/NavWrapper";
import { FiChevronLeft } from "react-icons/fi";
import { MdOutlineReport } from "react-icons/md";
import KakaoMapScript from "../util/KakaoMapScript";
import { Link, useNavigate, useParams } from "react-router-dom";
import { QueryClient, useMutation, useQuery } from "react-query";
import {
  deleteStore,
  showDetailStore,
  postComment,
  showComment,
} from "../api/api";
import Cookies from "js-cookie";
import CommentList from "../components/comment/CommentList";

function Detail() {
  const navigate = useNavigate();
  const token = Cookies.get("access_token");
  const { id } = useParams();
  const { data } = useQuery(
    "showDetail",
    () => showDetailStore({ id, token }),
    { staleTime: Infinity }
  );
  const queryClient = new QueryClient();
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

  function onDelete() {
    dlelteStoreItem.mutate({ token: token, id: id });
  }

  const commentData = useQuery("showPostComment", () => showComment(id));
  console.log(commentData?.data?.data?.data);

  const postingComment = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("showPostComment");
    },
  });

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
        {commentData?.data?.data?.data.map((item) => {
          return <CommentList key={item.id} item={item}></CommentList>;
        })}

        <ReivewInputBox>
          <form onSubmit={commentHandler}>
            <div>
              <ReviewInput
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="리뷰를 입력해주세요."
              />
            </div>
            <ReviewButton>
              <Btn>리뷰 작성하기</Btn>
            </ReviewButton>
          </form>
        </ReivewInputBox>
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

const ContentsWrapper = styled.div`
  //border: 0.0625rem solid black;
  width: 25rem;
  height: 500px;
  margin-bottom: 1.875rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.item_bg};
`;

const DeleteContain = styled.div`
  //border: 0.0625rem solid black;
  margin-top: 1.875rem;
`;

const ReivewInputBox = styled.div`
  //border: 0.0625rem solid black;
  width: 410px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ReviewInput = styled.textarea`
  font-family: "KCC-Ganpan";
  resize: none;
  width: 400px;
  height: 300px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(252, 247, 247);
`;

const ReviewButton = styled.div`
  //border: 0.0625rem solid black;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export default Detail;
