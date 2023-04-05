import React from "react";

import "./style.css";

const Select = (props) => {
  return (
    <div className="inputs">
      {props.label && (
        <label 
        htmlFor={props.id}
        >
          {props.label}
          {props.required && <span aria-hidden="true">*</span>}
        </label>
      )}

      <select
        type={props.type}
        name={props.name}
        defaultValue={props.defaultValue}
        id={props.id}
        className={`input ${props.className ? props.className : ""} ${
          props.status ? props.status : ""
        }`}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
        aria-required={props.required}
        aria-invalid={props.status === "error" ? true : ""}
        aria-describedby={props.errorMsg ? `${props.id}-error` : undefined}

      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {props.errorMsg && (
        <div
          id={`${props.id}-error`}
          className={props.status ? props.status : ""}
          role="alert"
        >
          {props.errorMsg}
        </div>
      )}
    </div>
  );
};

export default Select;
