import React from "react";

import "./style.css";

const Radio = (props) => {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    props.onChange(value, checked);
  };

  return (
    <div className={`radio-group ${props.theme ? props.theme : ""}`}>
      {props.options.map((option) => (
        <>
          <input
            type="radio"
            name={props.name}
            id={option.id}
            className={`radio ${option.theme ? option.theme : ""}`}
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

export default Radio;
