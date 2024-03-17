export const formDataToObj = (formData) => {
  const formDataJson = {};
  for (const [key, value] of formData.entries()) {
    formDataJson[key] = value;
  }
  return formDataJson;
};
