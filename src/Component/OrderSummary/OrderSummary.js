import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import Aux from '../../HOC/Auxiliary'

import {Modal,Button} from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const OrderSummary = (props)=>{
    
    const list = Object.keys(props.ingredients).map((igkey,index)=>{
        return <li>{igkey}: {props.ingredients[igkey]}</li>
    })
    return(
        <Aux>
    <Modal show={true}>
      <Modal.Header >
        <Modal.Title>Your Order Summary </Modal.Title>
      </Modal.Header>
      <Modal.Body> <p>A delicious Burger with the following ingredients:</p>
    <ul>
            {list}
    </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hideModal}>
          Cancel
        </Button>
        <Button variant="primary " onClick={props.checkout}>
          Continue to Checkout
        </Button>
      </Modal.Footer>
    </Modal>
    </Aux>
    )
   
    }
export default OrderSummary;