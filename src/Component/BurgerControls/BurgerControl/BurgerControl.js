import React from 'react';
import Aux from '../../../HOC/Auxiliary';
import Style from './BurgerControl.module.css'
const BurgerControl = (props)=>{
    return(
        <Aux>
            <div className={Style.label}>{props.label}</div>
            <button onClick={props.add} className={Style.btn}>More</button>
            <button onClick={props.less} className={Style.btn} disabled={props.isShow}>less</button>
        </Aux>
    )
}
export default BurgerControl;