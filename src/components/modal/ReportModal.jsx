import React from "react";
import Btn from "../Btn";
import styled from "styled-components";

const ReportModal = (props) => {
  return (
    <>
      <Madalback>
        <ModalContents>
          <ModalTitleBox>
            <ModalClose onClick={props.props.openHandler}>닫기</ModalClose>
            <ModalTitle>{props.children}</ModalTitle>
          </ModalTitleBox>
          <ModalTextAreaDiv>
            <form onSubmit={props.props.submitHandler}>
              <ModalTextArea
                value={props.props.inputValue}
                onChange={props.props.onChangeHandler}
                type="text"
              />
              <Btn small report children={"제출하기"}></Btn>
            </form>
          </ModalTextAreaDiv>
        </ModalContents>
      </Madalback>
    </>
  );
};

const Madalback = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

const ModalTitleBox = styled.div`
  //border: 0.0625rem solid black;
  font-family: "KCC-Ganpan";
`;

const ModalClose = styled.span`
  position: relative;
  top: 10px;
  left: 10px;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.color.btn_danger};
  }
`;

const ModalTitle = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const ModalContents = styled.div`
  width: 400px;
  height: 350px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.btn_success};
  border-radius: 10px;
`;

const ModalTextAreaDiv = styled.div`
  height: 100%;
  form {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const ModalTextArea = styled.textarea`
  width: 300px;
  height: 150px;
  resize: none;
  border-radius: 10px;
  outline: none;
`;

export default ReportModal;
