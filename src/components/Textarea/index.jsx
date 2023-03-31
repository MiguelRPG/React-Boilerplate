import React from "react";

import "./style.css";

const Textarea = (props) => {
  return (
    <div className="textarea-container">
      {props.label && (
        <label
          htmlFor={props.id}
          className={`${props.status ? props.status : ""}`}
        >
          {props.label}
          {props.required && <span aria-hidden="true">*</span>}
        </label>
      )}

      <textarea
        type={props.type || "text"}
        name={props.name}
        id={props.id}
        className={`textarea ${props.className ? props.className : ""} ${
          props.status ? props.status : ""
        }`}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
        aria-required={props.required}
        aria-invalid={props.status === "error" ? true : ""}
        aria-describedby={props.errorMsg ? `${props.id}-error` : undefined}
        maxlength={props.maxlength}
      >
        {props.children}
      </textarea>

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

export default Textarea;
