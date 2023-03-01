export function createNewFields(fields) {
  const newFields = [...fields];
  newFields.push({
    id: fields.length + 1,
    name: fields.length === 0 ? "팥붕어빵" : "슈크림붕어빵",
    price: "",
  });
  return newFields;
}

export function handleSelectChange(fields, id, event) {
  const newFields = [...fields];
  const index = newFields.findIndex((field) => field.id === id);
  if (index >= 0) {
    newFields[index] = {
      ...newFields[index],
      name: event.target.value,
    };
    const selectedValue = event.target.value;
    if (fields.some((f) => f.name === selectedValue && f.id !== id)) {
      newFields[index] = {
        ...newFields[index],
        name: "",
      };
    }
    return newFields;
  }
  return fields;
}

export function handleInputChange(fields, id, event) {
  const newFields = [...fields];
  const index = newFields.findIndex((field) => field.id === id);
  if (index >= 0 && !isNaN(event.target.value)) {
    newFields[index] = {
      ...newFields[index],
      price: event.target.value,
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
  for (const field of fields) {
    if (field.name === "" || field.price === "") {
      alert("붕어빵 가격은 숫자 아니면 등록 불가붕어!");
      return;
    }
  }

  return fields.map((field) => ({
    name: field.name,
    price: field.price,
  }));
}
