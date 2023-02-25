export function createNewFields(fields) {
  const maxSelectValue = getMaxSelectValue(fields);
  const newFields = [...fields];
  newFields.push({
    id: fields.length + 1,
    selectValue: String(maxSelectValue + 1),
    inputValue: "",
  });
  return newFields;
}

function getMaxSelectValue(fields) {
  if (fields.length === 0) {
    return 0;
  }
  return Math.max(...fields.map((field) => Number(field.selectValue)));
}

export function handleSelectChange(fields, id, event) {
  const newFields = [...fields];
  const index = newFields.findIndex((field) => field.id === id);
  if (index >= 0) {
    newFields[index] = {
      ...newFields[index],
      selectValue: event.target.value,
    };
    return newFields;
  }
  return fields;
}

export function handleInputChange(fields, id, event) {
  const newFields = [...fields];
  const index = newFields.findIndex((field) => field.id === id);
  if (index >= 0) {
    newFields[index] = {
      ...newFields[index],
      inputValue: event.target.value,
    };
    return newFields;
  }
  return fields;
}

export function handleDelete(fields, id) {
  const newFields = fields.filter((field) => field.id !== id);
  return newFields;
}

export function getOutput(fields) {
  return fields.map((field) => ({
    selectValue: field.selectValue,
    inputValue: field.inputValue,
  }));
}
