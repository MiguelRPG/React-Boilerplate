import React from "react";

import "./style.css";

const Radio = (props) => {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    props.onChange(value, checked);
  };

  return (
    <div className="inputs-radio">
      <fieldset className={`radio-group ${props.name ? props.name : ""}`}>
        {props.label && (
          <legend
            htmlFor={props.id}
            className={`${props.status ? props.status : ""}`}
          >
            {props.label}
            {props.required && <span aria-hidden="true">*</span>}
          </legend>
        )}

        {props.options.map((option) => (
          <label
            for={option.id}
            className={`${props.status ? props.status : ""} ${
              option.className ? option.className : ""
            }`}
          >
            <input
              type="radio"
              name={props.name}
              id={option.id}
              className={`radio ${props.status ? props.status : ""} ${option.className ? option.className : ""}`}
              value={option.value}
              disabled={option.disabled ? true : false}
              checked={option.checked}
              onChange={handleChange}
              aria-describedby={
                props.errorMsg ? `${props.id}-error` : undefined
              }
            />

            <span>{option.label}</span>
          </label>
        ))}

        {props.errorMsg && (
          <div
            id={`${props.id}-error`}
            className={props.status ? props.status : ""}
            role="alert"
          >
            {props.errorMsg}
          </div>
        )}
      </fieldset>
    </div>
  );
};

export default Radio;
