import React from "react";

const Select = ({ label, onChange, value, name, options }) => {
  return (
    <div>
      <label htmlFor="username" className="my-2">
        {label}
      </label>
        <select
          className="form-select form-control"
          aria-label="Default select example"
          value={value}
          onChange={onChange}
          name={name}
        >
          {options}
        </select>
      </div>
  );
};

export default Select;
