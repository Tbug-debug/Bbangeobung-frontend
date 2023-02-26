import React, { useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { postStore } from "../api/api";
import Btn from "../components/Btn";
import {
  createNewFields,
  handleSelectChange,
  handleInputChange,
  handleDelete,
  getOutput,
} from "../util/form-utils";

const MAX_FIELDS = 3;

function Register() {
  const [fields, setFields] = useState([
    { id: 1, fishBreadTypeId: "1", price: "" },
  ]);
  const [long, setLong] = useState("");
  const [lati, setLati] = useState("");
  const [body, setBody] = useState("");
  const [formImagin, setFormformImagin] = useState(new FormData());

  const postStor = useMutation(postStore, {
    onSuccess: () => {
      alert("전송 성공");
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
    const output = getOutput(fields);
    const result = JSON.stringify(output);
    const formData = new FormData();
    formData.append("latitude", Number(long));
    formData.append("longitude", Number(lati));
    formData.append("content", body);
    formData.append("jsonList", result);
    for (const keyValue of formImagin) {
      formData.append(keyValue[0], keyValue[1]);
    }

    //postStor.mutate(token, formData);

    for (const keyValue of formData) console.log(keyValue);
  }

  const activeFieldCount = fields.filter(
    (field) => field.fishBreadTypeId
  ).length;
  const isAddButtonDisabled =
    fields.length === 0 ||
    activeFieldCount >= MAX_FIELDS ||
    fields[fields.length - 1].fishBreadTypeId === "2";

  return (
    <RegisterBox>
      <Form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={onChangeimge} />
        <RegisterInput type="text" value={long} onChange={onLongInput} />
        <RegisterInput type="text" value={lati} onChange={onLatiInput} />
        <RegisterSpan>Contents</RegisterSpan>
        <RegisterInput type="text" value={body} onChange={onBodyInput} />
      </Form>
      <FieldContainer>
        <FieldWrapper>
          <Btn onClick={addField} disabled={isAddButtonDisabled}>
            Add Field
          </Btn>
          {fields.map((field) => (
            <div key={field.id}>
              <select
                value={field.fishBreadTypeId}
                onChange={(event) => handleSelectChangeWrapper(field.id, event)}
              >
                <option disabled value="">
                  Select an option
                </option>
                <option
                  value="1"
                  disabled={fields.some(
                    (f) => f.fishBreadTypeId === "1" && f.id !== field.id
                  )}
                >
                  Option 1
                </option>
                <option
                  value="2"
                  disabled={fields.some(
                    (f) => f.fishBreadTypeId === "2" && f.id !== field.id
                  )}
                >
                  Option 2
                </option>
              </select>
              <SelectInput
                type="text"
                value={field.price}
                onChange={(event) => handleInputChangeWrapper(field.id, event)}
              />
              <Btn smBtn delete onClick={() => handleDeleteWrapper(field.id)}>
                Delete
              </Btn>
            </div>
          ))}
        </FieldWrapper>
        <Btn disabled={fields <= 0} onClick={handleSubmit}>
          Submit
        </Btn>
      </FieldContainer>
    </RegisterBox>
  );
}

const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterSpan = styled.span`
  margin: 12px 0 10px 8px;
  font-weight: bold;
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

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectInput = styled.input`
  width: 150px;
  height: 29px;
  margin: 10px 20px;
  border: none;
  border-radius: 7px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Register;
