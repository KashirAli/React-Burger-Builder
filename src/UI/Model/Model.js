import React from 'react';
import Style from './Modal.module.css'
const Model = (props)=> {
    return(
        <div className={Style.Modal}>
        {props.children}
    </div>
    )
   
    }

export default Model;