import React, { useState } from 'react';
import styled from 'styled-components';
import Btn from '../components/Btn';
import { createNewFields, handleSelectChange, handleInputChange, handleDelete, getOutput } from '../util/form-utils';
import NavWrapper from '../components/NavWrapper';
import Navbar from '../components/Navbar';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MAX_FIELDS = 3;

function Register() {
  const [fields, setFields] = useState([{ id: 1, selectValue: '1', inputValue: '' }]);
  const [long, setLong] = useState('');
  const [lati, setLati] = useState('');
  const [body, setBody] = useState('');
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
    formData.append('imageFile', img);
    setFormData(formData);
  }

  function handleSubmit() {
    const output = getOutput(fields);
    const result = JSON.stringify(output);
    for (const keyValue of formdata) console.log(keyValue);
    const formData = new FormData();
    formData.append('latitude', long);
    formData.append('longitude', lati);
    formData.append('content', body);
    formData.append('jsonList', result);
    for (const keyValue of formData) console.log(keyValue);
  }

  const activeFieldCount = fields.filter((field) => field.selectValue).length;
  const isAddButtonDisabled = fields.length === 0 || activeFieldCount >= MAX_FIELDS || fields[fields.length - 1].selectValue === '2';

  return (
    <>
      <NavWrapper>
        <Navbar>
          <Link to={'/'}>
            <FiChevronLeft size={40} />
          </Link>
        </Navbar>
      </NavWrapper>
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
                <select value={field.selectValue} onChange={(event) => handleSelectChangeWrapper(field.id, event)}>
                  <option disabled value="">
                    Select an option
                  </option>
                  <option value="1" disabled={fields.some((f) => f.selectValue === '1' && f.id !== field.id)}>
                    Option 1
                  </option>
                  <option value="2" disabled={fields.some((f) => f.selectValue === '2' && f.id !== field.id)}>
                    Option 2
                  </option>
                </select>
                <SelectInput type="text" value={field.inputValue} onChange={(event) => handleInputChangeWrapper(field.id, event)} />
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
    </>
  );
}

const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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
