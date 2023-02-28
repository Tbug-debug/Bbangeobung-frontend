import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../components/Btn";
import {
  createNewFields,
  handleSelectChange,
  handleInputChange,
  handleDelete,
  getOutput,
} from "../util/form-utils";
import NavWrapper from "../components/NavWrapper";
import Navbar from "../components/Navbar";
import { FiChevronLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postStore } from "../api/api";
import Cookies from "js-cookie";

const MAX_FIELDS = 2;
const token = () => Cookies.get("access_token");

function Register() {
  const [fields, setFields] = useState([
    { id: 1, name: "팥붕어빵", price: "" },
  ]);

  const [long, setLong] = useState("");
  const [lati, setLati] = useState("");
  const [body, setBody] = useState("");
  const [formImagin, setFormformImagin] = useState(new FormData());

  function onSucces(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    setLong(lng);
    setLati(lat);
  }

  function onFailure() {
    alert("위치 정보를 찾을수가 없습붕어");
  }

  navigator.geolocation.getCurrentPosition(onSucces, onFailure);

  const navigate = useNavigate();

  const postStor = useMutation(postStore, {
    onSuccess: () => {
      navigate("/");
    },
  });

  function addField() {
    if (fields.length >= MAX_FIELDS) {
      return;
    }

    const newFields = createNewFields(fields);
    setFields(newFields);
  }

  function handleSelectChangeWrapper(id, event) {
    const newFields = handleSelectChange(fields, id, event);
    setFields(newFields);
  }

  function handleInputChangeWrapper(id, event) {
    const newFields = handleInputChange(fields, id, event);
    setFields(newFields);
  }

  function handleDeleteWrapper(id) {
    if (fields.length === 1) {
      alert("붕어빵 1개 뿐인데 삭제할거붕어?");
      return;
    }
    const newFields = handleDelete(fields, id);
    setFields(newFields);
  }

  function onLongInput(e) {
    setLong(e.target.value);
  }

  function onLatiInput(e) {
    setLati(e.target.value);
  }

  function onBodyInput(e) {
    setBody(e.target.value);
  }

  function onChangeimge(e) {
    const img = e.target.files[0];
    const formImg = new FormData();
    formImg.append("imageFile", img);
    setFormformImagin(formImg);
  }

  function handleSubmit() {
    if (body.length === 0) {
      alert("왜 입력 안하붕어?");
      return;
    }

    if (body.length >= 10) {
      alert("붕어빵 가게 이름은 10글자 이하로 해주붕어!.");
      return;
    }

    const output = getOutput(fields);
    const result = JSON.stringify(output);
    const formData = new FormData();
    formData.append("latitude", long);
    formData.append("longitude", lati);
    formData.append("content", body);
    formData.append("jsonList", result);
    for (const keyValue of formImagin) {
      formData.append(keyValue[0], keyValue[1]);
    }

    postStor.mutate({ token: token(), data: formData });
  }

  const activeFieldCount = fields.filter((field) => field.name).length;
  const isAddButtonDisabled =
    activeFieldCount >= MAX_FIELDS ||
    fields[fields.length - 1].name === "슈크림붕어빵";

  return (
    <>
      <RegisterContainer>
        <NavWrapper>
          <Navbar>
            <Link to={"/"}>
              <FiChevronLeft size={40} />
            </Link>
          </Navbar>
        </NavWrapper>
        <RegisterBox>
          <Form onSubmit={handleSubmit}>
            <RegisterRegistorTitle>
              &lt;붕어빵 사진 아니면 IP 벤 ㅅㄱ&gt;
            </RegisterRegistorTitle>
            <FileInput type="file" accept="image/*" onChange={onChangeimge} />
            <RegisterInputTitle>&lt;붕어빵 위치 좌표! &gt;</RegisterInputTitle>
            <PositonInput
              disabled
              type="text"
              value={long}
              onChange={onLongInput}
            />
            <PositonInput
              disabled
              type="text"
              value={lati}
              onChange={onLatiInput}
            />
            <RegisterSpan>&lt;가게 설명... &gt;</RegisterSpan>
            <RegisterInput
              placeholder="붕어빵 가게 설명은 10글자 이하로!"
              type="text"
              value={body}
              onChange={onBodyInput}
            />
          </Form>
          <RegisterSelectTitle>
            &lt;붕어빵 종류 & 가격! &gt;
          </RegisterSelectTitle>
          <FieldContainer>
            <FieldWrapper>
              <Btn onClick={addField} disabled={isAddButtonDisabled}>
                {isAddButtonDisabled
                  ? "마지막 붕어빵이에요. 추가 불가능해요."
                  : "붕어빵 종류 더 있어요."}
              </Btn>
              {fields.map((field) => (
                <div key={field.id}>
                  <SelectBox
                    value={field.name}
                    onChange={(event) =>
                      handleSelectChangeWrapper(field.id, event)
                    }
                  >
                    <SelectOption disabled value="">
                      Select an option
                    </SelectOption>
                    <SelectOption
                      value="팥붕어빵"
                      disabled={
                        fields.some(
                          (f) =>
                            f.id === 1 && f.id !== field.id && field.id !== 1
                        ) || field.name === ""
                      }
                    >
                      팥붕어빵
                    </SelectOption>
                    <SelectOption
                      value="슈크림붕어빵"
                      disabled={
                        fields.some(
                          (f) =>
                            f.id === 2 && f.id !== field.id && field.id !== 2
                        ) || field.name === ""
                      }
                    >
                      슈크림붕어빵
                    </SelectOption>
                  </SelectBox>
                  <SelectInput
                    type="text"
                    value={field.price}
                    placeholder="붕어빵 가격은 얼마?"
                    onChange={(event) =>
                      handleInputChangeWrapper(field.id, event)
                    }
                  />
                  <Btn
                    smBtn
                    delete
                    onClick={() => handleDeleteWrapper(field.id)}
                  >
                    Delete
                  </Btn>
                </div>
              ))}
            </FieldWrapper>
            <Btn registerBtn disabled={fields <= 0} onClick={handleSubmit}>
              붕어빵 제출하기
            </Btn>
          </FieldContainer>
        </RegisterBox>
      </RegisterContainer>
    </>
  );
}

const RegisterContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterSpan = styled.span`
  font-family: "KCC-Ganpan";
  margin: 12px 0 10px 8px;
  font-weight: bold;
  margin-top: 40px;
  font-size: 20px;
`;

const RegisterRegistorTitle = styled.span`
  font-family: "KCC-Ganpan";
  margin-bottom: 30px;
  font-size: 20px;
`;

const RegisterInputTitle = styled.span`
  font-family: "KCC-Ganpan";
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
`;

const RegisterInput = styled.textarea`
  resize: none;
  width: 350px;
  height: 100px;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 10px;
  font-size: 19px;
`;

const PositonInput = styled.textarea`
  resize: none;
  width: 350px;
  height: 50px;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 10px;
  font-size: 19px;
`;

const RegisterSelectTitle = styled.span`
  font-family: "KCC-Ganpan";
  margin-top: 40px;
  font-size: 20px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const SelectInput = styled.input`
  width: 150px;
  height: 29px;
  margin: 10px 20px;
  border: none;
  border-radius: 7px;
`;

const SelectBox = styled.select`
  width: 150px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;
  outline: 0 none;
`;

const SelectOption = styled.option`
  background: white;
  color: black;
  padding: 3px 0;
  border-radius: 50px;
`;

const FileInput = styled.input`
  margin-bottom: 30px;
  ::file-selector-button {
    font-family: "KCC-Ganpan";
    width: 150px;
    height: 30px;
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
      border: 2px solid white;
    }
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Register;
