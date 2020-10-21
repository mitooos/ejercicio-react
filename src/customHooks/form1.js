import { useState } from "react";

const useForm = (objects, action, validateFunction) => {
  const createStruct = (objs) => {
    let obj = {};
    objs.map((item) => (obj[item.name] = ""));
    return obj;
  };

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState(createStruct(objects));

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateFunction(values));
    if (!errors) {
      action(values);
    }
  };

  return { handleChange, handleSubmit, errors };
};

export default useForm;
