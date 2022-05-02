import React from "react";
import "./Button.scss";

function Button({buttonText,showModal}) {
  return <button className="add-button" onClick={showModal}>{buttonText}</button>;
}

export default Button;
