import React from 'react';
import Style from './Input.module.css'
const Input = (props)=>{
    let InputElement =  null;
    switch (props.elementtype){
        case 'input':
            InputElement = <input className={Style.Input} {...props.config} value={props.value} onChange={props.changed}/>
            break;
        case 'textArea':
            InputElement = <textarea className={Style.Input}{...props.config} value={props.value} onChange={props.changed}/>
            break;
        case 'select':
            console.log(props)
            InputElement = (<select value={props.value}    className={Style.Input} onChange={props.changed}>
                                {props.config.options.map(curr=> {return(
                                  
                                    <option value={curr.value}>
                                        {curr.displayValue}</option>
                                 )})}
            </select>)
            break;
            
        default:
            InputElement = <input className={Style.Input}{...props.config} value={props.value}/>    
           
        
    }


    return(
        <>
        <label>{props.label}</label>
        {InputElement}
      

        </>
    );
}
export default Input;