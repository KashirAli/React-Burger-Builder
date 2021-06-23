import axios from 'axios';
import React,{Component} from 'react';
import CheckoutSummary from '../../Component/CheckoutSummary/CheckoutSummary'
class Checkout extends Component{
        state = {
            ingredients:{
                salad:1,
                bacon:1,
                cheese:1,
                meat:0
            },
            price:0
        }
        componentDidMount(){
           const query = new URLSearchParams(this.props.location.search);
          let ingredients={};
          let price=0;
          console.log(query.entries())
           for(let params of query.entries()){
               if(params[0]==='price'){
                    price = +params[1]
               }
               else{

                   ingredients[params[0]] = +params[1]   
               }
                
            }
            this.setState({ingredients:ingredients,price:price})
            console.log(this.state.ingredients)
        }
        continueHandler = ()=>{
            this.props.history.push(this.props.match.url+'/contact-data')
        }
        cancelHandler = ()=>{
        this.props.history.goBack();
        }
    render(){
        return(
            <CheckoutSummary continue={this.continueHandler} cancel={this.cancelHandler} ingredients={this.state.ingredients} price={this.state.price}/>
        );

    }
}
export default Checkout;