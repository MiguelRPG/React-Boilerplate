import React from "react";

import "./style.css";

const Input = (props) => {
  return (
    <div className="inputs">
      {props.label && (
        <label htmlFor={props.id}>
          {props.label}
          {props.required && <span aria-hidden="true">*</span>}
        </label>
      )}

      <input
        type={props.type || "text"}
        name={props.name}
        id={props.id}
        defaultValue={props.defaultValue}
        className={`input ${props.className ? props.className : ""} ${props.status ? props.status : ''}`}
        placeholder={props.placeholder}
        onChange={props.onChange}
        
        required={props.required}
        autocomplete={props.autocomplete}
        disabled={props.disabled}
        aria-required={props.required}
        aria-invalid={props.status === "error" ? true : ""}


        aria-describedby={props.errorMsg ? `${props.id}-error` : undefined}
      />

      {props.errorMsg && (
        <div id={`${props.id}-error`} className={props.status ? props.status : ''} role="alert">
          {props.errorMsg}
        </div>
      )}
    </div>
  );
};

const Email = (props) => {
  return (
    <Input
      {...props}
      type="email"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    />
  );
};

const Tel = (props) => {
  return <Input {...props} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />;
};

export default Input;
export { Email, Tel };
