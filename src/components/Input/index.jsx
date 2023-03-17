import React from 'react';

import './style.css';

const Input = ({ type, id, name, value, defaultValue, theme, disabled, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      defaultValue={defaultValue}
      id={id}
      className={`input ${theme}`}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
