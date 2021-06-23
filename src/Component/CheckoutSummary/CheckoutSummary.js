import React from 'react';
import Burger from '../Burger/Burger'
import Button from '../../UI/Button/Button'
import Style from'./CheckoutSummary.module.css'
import {withRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import ContactForm from '../../Container/Checkout/ContactForm/ContactForm'
const CheckoutSummary = (props)=>{
   
    console.log('checkout:',props)
    return (
        <div>
            <h2 className={Style.Checkout}>
                We hope it taste superb!!!
            </h2>
            <Burger type={props.ingredients}/>
           <div className={Style.center}>
           <Button type="success"  clicked={props.continue} value="Continue"/>
            <Button type="danger" clicked={props.cancel} value="Cancel"/>    
           </div>
           
            <Route path={props.match.url+'/contact-data'} render={()=>(<ContactForm ingredients={props.ingredients} price={props.price} {...props}/>)}/>
        </div>
    );
}
export default withRouter(CheckoutSummary);