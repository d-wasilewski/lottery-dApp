import React from "react";
import "../styles/button.css";

export const Button = ({ text, onClick, size }) => {
  return (
    <button className={`buttonGradient ${size}`} onClick={onClick}>
      {text}
    </button>
  );
};
