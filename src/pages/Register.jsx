import React, { useState } from "react";
import styled from "styled-components";
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
    { id: 1, selectValue: "1", inputValue: "" },
  ]);
  const [long, setLong] = useState("");
  const [lati, setLati] = useState("");
  const [body, setBody] = useState("");
  const [formdata, setFormData] = useState([]);

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
    const formData = new FormData();
    formData.append("imageFile", img);
    setFormData(formData);
  }

  function handleSubmit() {
    const output = getOutput(fields);
    const result = JSON.stringify(output);
    for (const keyValue of formdata) console.log(keyValue);
    const formData = new FormData();
    formData.append("latitude", long);
    formData.append("longitude", lati);
    formData.append("content", body);
    formData.append("jsonList", result);
    for (const keyValue of formData) console.log(keyValue);
  }

  const activeFieldCount = fields.filter((field) => field.selectValue).length;
  const isAddButtonDisabled =
    fields.length === 0 ||
    activeFieldCount >= MAX_FIELDS ||
    fields[fields.length - 1].selectValue === "2";

  return (
    <RegisterBox>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={onChangeimge} />
        <input type="text" value={long} onChange={onLongInput} />
        <input type="text" value={lati} onChange={onLatiInput} />
        <input type="text" value={body} onChange={onBodyInput} />
      </form>
      <div>
        <button onClick={addField} disabled={isAddButtonDisabled}>
          Add Field
        </button>
        {fields.map((field) => (
          <div key={field.id}>
            <select
              value={field.selectValue}
              onChange={(event) => handleSelectChangeWrapper(field.id, event)}
            >
              <option disabled value="">
                Select an option
              </option>
              <option
                value="1"
                disabled={fields.some(
                  (f) => f.selectValue === "1" && f.id !== field.id
                )}
              >
                Option 1
              </option>
              <option
                value="2"
                disabled={fields.some(
                  (f) => f.selectValue === "2" && f.id !== field.id
                )}
              >
                Option 2
              </option>
            </select>
            <input
              type="text"
              value={field.inputValue}
              onChange={(event) => handleInputChangeWrapper(field.id, event)}
            />
            <button onClick={() => handleDeleteWrapper(field.id)}>
              Delete
            </button>
          </div>
        ))}
        <button disabled={fields <= 0} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </RegisterBox>
  );
}

const RegisterBox = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
/* const ResgisterImageBox = styled.input`
  border: 1px solid black;
`;

const ResigisterTextarea = styled.textarea`
  border: 1px solid black;
`;

const RegisterInput = styled.input``; */

export default Register;
