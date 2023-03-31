import React from "react";

import "./style.css";

const Button = (props) => {
  return (
    <div className="inputs-actions">

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
          className={`alertby ${props.status ? props.status : ""}`}
          role="alert"
        >
          {props.errorMsg}
        </div>
      )}
    </div>
  );
};

const Submit = (props) => {
  return <Button {...props} type="submit" />;
};

export default Button;
export { Submit };
