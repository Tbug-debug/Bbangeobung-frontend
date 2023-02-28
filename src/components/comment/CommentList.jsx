import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiTrash, FiEdit2 } from "react-icons/fi";
import { deleteComment } from "../../api/api";
import { useMutation, useQueryClient } from "react-query";
import Cookies from "js-cookie";

const CommentList = ({ item, edithand }) => {
  const localUserName = JSON.parse(localStorage.getItem("userInfo"));
  const token = Cookies.get("access_token");
  const queryClient = useQueryClient();

  const [checkUser, setCheckUser] = useState(false);

  useEffect(() => {
    if (localUserName.userName === item.username) {
      setCheckUser(true);
    }
  }, []);

  const deletComment = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("showPostComment");
    },
  });

  function deleteStore(id) {
    deletComment.mutate({ token: token, commentId: id });
  }

  return (
    <>
      <CommentListItem>
        <CommentSpan>{item.username}</CommentSpan>
        <CommentSpan>{item.comment}</CommentSpan>
        {checkUser && (
          <>
            <CommentSpan>
              <FiEdit2
                onClick={() => edithand(item.id)}
                size={25}
                className="edit"
              />
            </CommentSpan>
            <CommentSpan>
              <FiTrash
                onClick={() => deleteStore(item.id)}
                size={25}
                className="trash"
              />
            </CommentSpan>
          </>
        )}
      </CommentListItem>
    </>
  );
};

const CommentListItem = styled.div`
  display: flex;
  :last-child {
    justify-content: center;
  }
  :not(:first-child) {
    margin-top: 17px;
  }
  span:nth-child(1) {
    width: 75px;
    word-wrap: break-word;
  }
  span:nth-child(2) {
    flex-grow: 10;
    width: 230px;
    word-wrap: break-word;
  }
  span:nth-child(3) {
    flex-grow: 1;
    margin: auto;
    padding-left: 10px;
  }
  span:nth-child(4) {
    flex-grow: 1;
    margin: auto;
    padding-left: 1px;
  }
  .trash {
    padding: 4px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.btn_danger};
    cursor: pointer;
  }
  .edit {
    padding: 4px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.btn_sign_up};
    cursor: pointer;
  }
`;

const CommentSpan = styled.span`
  :not(:first-child) {
    margin-left: 10px;
  }
`;

export default CommentList;
