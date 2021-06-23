import React from 'react';
import Aux from '../../HOC/Auxiliary';
import BurgerControl from './BurgerControl/BurgerControl';
import Style from './BurgerControls.module.css'
import {Button } from 'react-bootstrap'
const BurgerControls = (props)=>{
  const controls =[{
      label:'Cheese' , type:'cheese'
  },{
    label:'Meat' , type:'meat'
},
{
    label:'Salad' , type:'salad'
},
{
    label:'Bacon' , type:'bacon'
}
]
    return(
            <Aux>
              
                <div className={Style.burgerControls}> 
                <div className={Style.center}>{props.price}</div>
                <div className={Style.displayGrid}>
                {controls.map(ctrl=>{
                    return  <BurgerControl 
                                    key={ctrl.label}
                                    label={`Add ${ctrl.label} `} 
                                    add={()=> props.add(ctrl.type)} 
                                    less={()=> props.less(ctrl.type)}
                                    isShow={props.isDisable[ctrl.type]}/>
                    })
                }
                    </div> 

                    <Button className={Style.btn} onClick={props.model} disabled={props.btnDisabled}> Hello</Button>  

            </div>
        
               
                
            </Aux>
            
            
    )
}
export default BurgerControls;