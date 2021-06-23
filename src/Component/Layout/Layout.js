import React from 'react';
import Aux from '../../HOC/Auxiliary';
import Styles from './Layout.module.css';
import burgers from '../../Assets/burgers.png'
import {Navbar,Nav} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Layout = (props)=>{
    return (
        <Aux>
        <Navbar style={{background:'#663300',height:'70px'}} expand="lg">
        <Navbar.Brand> <img className={Styles.img} src={burgers} alt="burger logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div className={Styles.mr}></div>
          <Nav className={Styles.mr}>
            <Nav.Link href="#home">Burger</Nav.Link>
            <Nav.Link href="#link">Checkout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
            <main className={Styles.container}>
                    {props.children}
            </main>
        </Aux>
      


    )
}
export default Layout;