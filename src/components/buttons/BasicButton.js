import React from "react";
import './BasicButton.css';


const BasicButton = ({ text, onClick, style }) => {
  return (
    <button style={style} onClick={onClick} className="button-container">
      <span className="button-text">{text}</span>
    </button>
  )
}

export default BasicButton;