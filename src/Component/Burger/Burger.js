import React from 'react';
import Style from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger = (props)=>{
   let transformedIngredients = Object.keys(props.type).map(igKey =>{
       return [...Array(props.type[igKey])].map((_,index)=> {
        return <BurgerIngredient key={igKey + index} type={igKey} />
   })}).reduce((prevArr,currValue)=>{
       return prevArr.concat(currValue)
   },[])
   if(transformedIngredients.length === 0) {
       transformedIngredients = (<p>Please Enter Ingredients</p>)
   }
   
    return(
        <div className={Style.Burger}>
            <BurgerIngredient type='bread-top' />
          {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}
export default Burger;