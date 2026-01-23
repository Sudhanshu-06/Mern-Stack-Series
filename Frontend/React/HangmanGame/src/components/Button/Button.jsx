import React from "react";
import './Button.css'

const Button = ({ text, onClickHandler }) => {
  console.log(text);
  return <button
   onClick={onClickHandler}
//    style={{'backgroundColor':'black', 'color':'white'}}
    className="btn"
   >
    {text}
    
    </button>;
};

export default Button;
