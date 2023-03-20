import React from 'react';

import './style.css';

const Input = (props) => {
  return (
    <input
      type={props.type || "text"}
      name={props.name}
      defaultValue={props.defaultValue}
      id={props.id}
      className={`input ${props.theme}`}
      disabled={props.disabled}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
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
}

export default Input;
export {Email};
