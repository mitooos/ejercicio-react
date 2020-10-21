module.exports.validateForm1 = (values) => {
  const errores = {};
  if (!values.name) {
    errores.name = "Lenght of names is too short";
  }
  if (!values["last name"]) {
    errores["last name"] = "Lenght of names is too short";
  }
  if (!values.age) {
    errores.age = "age must be valid";
  }
  return errores;
};
