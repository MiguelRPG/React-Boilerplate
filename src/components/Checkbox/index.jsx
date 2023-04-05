import React from "react";

import "./style.css";

const Checkbox = (props) => {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    props.onChange(value, checked);
  };

  return (
    <div className="inputs-checkbox">
      <fieldset className={`checkbox-group ${props.name ? props.name : ""}`}>
        {props.label && (
          <legend
            htmlFor={props.id}
          >
            {props.label}
            {props.required && <span aria-hidden="true">*</span>}
          </legend>
        )}

        {props.options.map((option) => (
          <label
            for={option.id}
            className={`${props.status ? props.status : ""} ${option.className ? option.className : ""}`}
          >
            <input
              type="checkbox"
              name={option.name}
              id={option.id}
              className={`checkbox ${props.status ? props.status : ""} ${option.className ? option.className : ""}`}
              value={option.value}
              disabled={option.disabled ? true : false}
              checked={option.checked}
              onChange={handleChange}
              aria-invalid={props.status === "error" ? true : ""}
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

export default Checkbox;
