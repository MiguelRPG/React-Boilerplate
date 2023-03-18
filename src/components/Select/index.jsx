import React from "react";

import "./style.css";

const Select = (props) => {
  return (
    <select
      type={props.type}
      name={props.name}
      defaultValue={props.defaultValue}
      id={props.id}
      className={`select ${props.theme}`}
      disabled={props.disabled}
      placeholder={props.placeholder}
      onChange={props.onChange}
    >
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
