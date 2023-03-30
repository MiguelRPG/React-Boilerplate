import React from "react";

import "./style.css";

const Button = (props) => {
  return (
    <div className="inputs">

      <button
        name={props.name}
        id={props.id}
        className={`button ${props.status ? props.status : ""} ${props.className ? props.className : ""}`}
        onClick={props.onClick}
        disabled={props.disabled}
        aria-describedby={props.errorMsg ? `${props.id}-error` : undefined}
      >
        {props.children}
      </button>

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

export default Button;
