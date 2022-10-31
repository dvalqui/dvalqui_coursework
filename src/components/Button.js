import React from "react";
import "./Button.css"; 


function Button({text, clickHandler, isDisabled=false}) {
    return (
        <button className="Button" disabled={isDisabled} onClick={clickHandler}>
            {text}
        </button>
    );
}

    export default Button; 
