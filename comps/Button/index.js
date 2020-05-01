import React from 'react';
import './button.css';


const Button = ({width, text, onClick}) =>
    <div id="buttoncomp"
    style = {{width: width}} onClick={onClick}>
            {text}
            <div id="buttonicon"></div>
        </div>;

function ButtonClick(){
    alert("Clicked");
}

Button.defaultProps = {
    text:"Next",
    width:"150px",
    onClick: ButtonClick
}

export default Button;

