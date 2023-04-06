import React, { useState } from "react";

import "./style.css";

const Input = (props) => {

  const [errorMsg, setErrorMsg] = useState(null);
  const [touched, setTouched] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const validator = props.validator;

    if (validator) {
      const error = validator(value);
      setErrorMsg(error);
    }

    if (props.onChange) {
      props.onChange(event);
    }
  };

  const handleBlur = (event) => {
    setTouched(true);

    const value = event.target.value;
    const validator = props.validator;

    if (validator) {
      const error = validator(value);
      setErrorMsg(error);
    }
  };

  const isError = () => touched || errorMsg || props.errorMsg !== "" || props.status === "error";

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

      <input
        type={props.type || "text"}
        name={props.name}
        id={props.id}
        defaultValue={props.defaultValue}
        className={`input ${props.className ? props.className : ""} ${
          props.status ? props.status : ""
        }`}
        placeholder={props.placeholder}

        onChange={props.validatorOnChange ? handleChange : () => {}}
        onBlur={props.validatorOnBlur ? handleBlur : () => {}}

        required={props.required}
        autocomplete={props.autocomplete}
        disabled={props.disabled}
        aria-required={props.required}
        aria-invalid={props.status === "error" || isError ? true : ""}
        aria-describedby={isError ? `${props.id}-error` : undefined}

        pattern={props.pattern}
        min={props.min}
        max={props.max}
      />

      {(isError) && (
        <div
          id={`${props.id}-error`}
          className={
            props.status ? props.status : (isError ? 'error' : "")
          }
          role="alert"
        >
          {errorMsg || props.errorMsg}
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

const Date = (props) => {
  return (
    <Input
      {...props}
      type="date"
      min={props.min}
      max="2014-04-09"
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
    />
  );
};

export default Input;
export { Email, Tel, Date };
