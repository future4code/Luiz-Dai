import { useState } from "react";

function useForm(initialValues) {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  const resetForm = () => {
    setForm(initialValues);
  };
  console.log(form);
  return { form, onChange, resetForm };
}

export default useForm;
