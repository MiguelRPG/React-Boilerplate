import React from 'react';

import './style.css';

const Input = (props) => {
  return (
    <input
      type={props.type}
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

export default Input;
