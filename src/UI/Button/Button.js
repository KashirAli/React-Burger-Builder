import React from 'react';
import './Button.css'
const Button = (props)=>{

    return(
        <button className={props.type}  onClick={props.clicked}>{props.value}</button>
    );
}
export default Button;