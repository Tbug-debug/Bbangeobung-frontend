export function createNewFields(fields) {
  const maxSelectValue = getMaxSelectValue(fields);
  const newFields = [...fields];
  newFields.push({
    id: fields.length + 1,
    fishBreadTypeId: String(maxSelectValue + 1),
    price: "",
  });
  return newFields;
}

function getMaxSelectValue(fields) {
  return Math.max(fields.map((field) => Number(field.fishBreadTypeId)));
}

export function handleSelectChange(fields, id, event) {
  const newFields = [...fields];
  const index = fields.findIndex((field) => field.id === id);
  if (index >= 0) {
    newFields[index] = {
      ...newFields[index],
      fishBreadTypeId: event.target.value,
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
  return fields.map((field) => ({
    fishBreadTypeId: field.fishBreadTypeId,
    price: field.price,
  }));
}
