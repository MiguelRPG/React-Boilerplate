import React from "react";

import "./style.css";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type || "text"}
        name={props.name}
        defaultValue={props.defaultValue}
        id={props.id}
        className={`input ${props.theme}`}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autocomplete="name"
        aria-required="true"
        aria-invalid="true"
        aria-describedby={props.errorMsg ? `${props.id}-error` : undefined}
      />
      {props.errorMsg && (
        <div id={`${props.id}-error`} role="alert">
          {props.errorMsg}
        </div>
      )}
    </>
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
