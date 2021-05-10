import React from "react";
const Input = ({ label, placeholder, type, value, onChange, name }) => {
  return (
    <div className="form-group input-group-sm">
      <label htmlFor="username" className="my-2">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id="username"
        placeholder={placeholder}
        autoComplete="off"
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
