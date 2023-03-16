import React from 'react';

import './style.css';

const Button = ({ text, onClick, disabled, theme }) => {
  return (
    <button
      className={`button ${theme}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Button',
  onClick: () => {},
  disabled: false,
  theme: 'default',
};

export default Button;
