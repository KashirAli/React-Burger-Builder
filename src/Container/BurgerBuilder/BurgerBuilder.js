import react, { Component } from "react";
import Aux from "../../HOC/Auxiliary";
import Burger from '../../Component/Burger/Burger'
import BurgerControls from "../../Component/BurgerControls/BurgerControls";
import Model from "../../UI/Model/Model";
import OrderSummary from "../../Component/OrderSummary/OrderSummary";
import instance from '../../Component/axios-order'
import Spinner from '../../UI/Spinner/Spinner'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'
import axios from "axios";
const PriceProduct = {
    meat:10,
    cheese:5,
    bacon:2,
    salad:7

}

class BurgerBuilder extends Component{
   state = {
       ingredients:null,
       totalPrice:0,
       showModal:false,
       loading:false,
       error:false
   }
   componentDidMount(){
       console.log('burger builder',this.props)
       axios.get('https://react-my-burger-7cea3-default-rtdb.firebaseio.com/ingredients.json').then(response=>{
           return this.setState({ingredients:response.data})
       }).catch(error=>this.setState({error:true}))
   }
    add =(type)=>{
 
        // if(type ==='meat')
        // this.setState( {ingredients: {...this.state.ingredients,meat:this.state.ingredients.meat+1} })
        // else if(type ==='cheese')
        // this.setState( {ingredients: {...this.state.ingredients,cheese:this.state.ingredients.cheese+1} })        
        // else if(type==='bacon')
        // this.setState( {ingredients: {...this.state.ingredients,bacon:this.state.ingredients.bacon+1} })
        // else if(type=== 'salad')
        // this.setState( {ingredients: {...this.state.ingredients,salad:this.state.ingredients.salad+1} })

        const oldcount = this.state.ingredients[type];
        const newcount = oldcount +1;
        const oldIngredient = {
            ...this.state.ingredients
        }
      
        oldIngredient[type] = newcount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + PriceProduct[type];
        this.setState({ingredients:oldIngredient,totalPrice:newPrice})
    }
    less =(type)=>{
       
        // if(type ==='meat' && this.state.ingredients.meat>0)
        // this.setState( {ingredients: {...this.state.ingredients,meat:this.state.ingredients.meat-1} })
        // else if(type ==='cheese' && this.state.ingredients.cheese>0)
        // this.setState( {ingredients: {...this.state.ingredients,cheese:this.state.ingredients.cheese-1} })        
        // else if(type==='bacon' && this.state.ingredients.bacon>0)
        // this.setState( {ingredients: {...this.state.ingredients,bacon:this.state.ingredients.bacon-1} })
        // else if(type=== 'salad' && this.state.ingredients.salad>0)
        // this.setState( {ingredients: {...this.state.ingredients,salad:this.state.ingredients.salad-1} })

        const oldcount = this.state.ingredients[type];
        if(oldcount>0) { 
            const newcount = oldcount -1;
        const oldIngredient = {
            ...this.state.ingredients
        }
        oldIngredient[type] = newcount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - PriceProduct[type];
        this.setState({ingredients:oldIngredient,totalPrice:newPrice})
        
    }
   

 
}
showModalHandler = ()=>{
    this.setState({showModal:true})
}
hideModalHandler = ()=>{
    this.setState({showModal:false})
}
checkoutHandler=()=>{
   let queryParams= [];
    for(let i in this.state.ingredients){
       queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    queryParams.push("price="+ this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
        pathname:'/checkout',
        search:'?'+ queryString 
    })
    // const order={

    //     ingredients:this.state.ingredients,
    //     price:this.state.totalPrice,
    //     customer:{
    //         name:'kashir ali',
    //         address:{
    //             streetNo:102,
    //             country:'Pakistan',
    //             town:'township',
    //             city:'Lahore'
    //         },
    //         email:'abe@test.com'
    //     },
    //     deliveryMethod:'fatest'
    // }
    // this.setState({loading:true})
    // instance.post('/orders.json',order).then(()=>{
    //     return this.setState({loading:false,showModal:false})
    // }).catch(()=> {return this.setState({loading:false,showModal:false})})
}
    render(){
      
       let sum ;
        console.log(sum)
        const disableCheck = {
            ...this.state.ingredients
        }
        for(let key in disableCheck){
            disableCheck[key] = disableCheck[key]<=0
        }
        let burger = this.state.error?<p>Ingredients can't be uploaded</p>:<Spinner/>;
        if(this.state.ingredients){
            const sum = Object.keys(this.state.ingredients).map((igkey,index)=>{
                return this.state.ingredients[igkey]
             }).reduce((cons,curr)=>{
                 return cons+curr
             },0)
            burger = (
                <>
                <Burger type={this.state.ingredients}/>
                    
                    <BurgerControls
                        add = {this.add}
                        less = {this.less}
                        price ={this.state.totalPrice}
                        isDisable={disableCheck}
                        btnDisabled={sum<=0}
                        model={this.showModalHandler}
                    />
                    </>
            )
        }
       
      

        return( 
            <Aux>
                {/* Model here */}
             {this.state.showModal?<Model>
                 {
                     this.state.loading?<Spinner/>: <OrderSummary ingredients={this.state.ingredients} checkout={this.checkoutHandler} hideModal={this.hideModalHandler}/>
                 }
                                  
                </Model>:null}   
                 {burger}
                
             
            </Aux>
        )
    }
    
}
export default withErrorHandler(BurgerBuilder,instance);