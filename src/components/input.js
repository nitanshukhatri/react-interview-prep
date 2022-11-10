import React, { useState } from "react";

const InputField = (props) => {
  const { value, label, name, placeholder, type } = props;
  const handleChange = (event) => {
    const result = event.target.value.replace(/[^a-z]/gi, "");
    setMessage(result);
  };
  const [message, setMessage] = useState("");
  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value || message}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
