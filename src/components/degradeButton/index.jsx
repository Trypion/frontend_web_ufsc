import React from "react";

import "./styles.css";

// TODO: preparar botao para receber funções, created at 12/02/2022
export const DegradeButton = (props) => {
  return (
    <button
      type={props.type}
      className={`degrade-button ${props.buttonClass}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
