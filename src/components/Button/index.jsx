import React from 'react';

import './style.css';

const Button = (props) => {
  return (
    <button
      className={`button ${props.theme}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
