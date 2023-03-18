import React from "react";

import "./style.css";

const Checkbox = (props) => {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    props.onChange(value, checked);
  };

  return (
    <div className={`checkbox-group ${props.name ? props.name : ""}`}>
      {props.options.map((option) => (
        <>
          <input
            type="checkbox"
            name={option.name}
            id={option.id}
            className={`checkbox ${option.theme ? option.theme : ""}`}
            value={option.value}
            disabled={option.disabled ? true : false}
            checked={option.checked}
            onChange={handleChange}
          />
          <label for={option.id} className={`${option.theme ? option.theme : ""}`}>{option.label}</label>
        </>
      ))}
    </div>
  );
};

export default Checkbox;
