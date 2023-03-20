import React from "react";

import "./style.css";

const Submit = (props) => {
  return (
    <button
      type="submit"
      className={`submit ${props.theme}`}
      disabled={props.disabled}
      id={props.id}
      name={props.name}
    >
      {props.label}
    </button>
  );
};

export default Submit;
