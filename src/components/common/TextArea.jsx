import React from "react";

const TextArea = ({ label, value, onChange, name, placeholder }) => {
  return (
    <div className="form-floating">
      <label htmlFor="username" className="my-2">
        {label}
      </label>
      <textarea
        className="form-control"
        placeholder={placeholder}
        id="floatingTextarea"
        value={value}
        onChange={onChange}
        name={name}
      ></textarea>
    </div>
  );
};

export default TextArea;
