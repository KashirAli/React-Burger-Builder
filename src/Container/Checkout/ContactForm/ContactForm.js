import React from 'react';
import { Component } from 'react';
import instance from '../../../Component/axios-order';
import Style from './ContactForm.module.css'
import Input from '../../../UI/Input/Input'
class ContactForm extends Component{

    state={
        ingredients:null,
        price:0,
        orderForm:{
            name:{
                elementtype:"input",
                config:{
                    name:"name",
                    type:"text",
                    placeholder:"Your Name"
                },
                value:'',
                validation:{
                    required:true,
                    minimum:3,
                    maximum:5
                },
                valid:false
            },
            Street:{
                elementtype:"input",
                config:{
                    name:"street",
                    type:"text",
                    placeholder:"Your Street"
                },
                value:'',
                validation:{
                    required:true,
                    minimum:3,
                    maximum:5
                },
                valid:false
            },
            Zip:{
                elementtype:"input",
                config:{
                    name:"Zip",
                    type:"text",
                    placeholder:"Zip Code"
                },
                value:'',
                validation:{
                    required:true,
                    minimum:3,
                    maximum:5
                },
                valid:false
            },
            email:{
                elementtype:"input",
                config:{
                    name:"email",
                    type:"email",
                    placeholder:"Your Email"
                },
                value:'',
                validation:{
                    required:true,
                    minimum:3,
                    maximum:5
                },
                valid:false
            },
            delivery:{
                elementtype:"select",
                config:{
                    options:[{value:'fastest' , displayValue:'fastest'},{value:'slow' , displayValue:'slow'}]
                },
                value:''
            }
        }
       
    }
    componentDidMount(){
        this.setState({ingredients:this.props.ingredients,price:this.props.price})
    }
    submitHandler=(event)=>{
        const otherData = {};
        for(let formIdentifier in this.state.orderForm){
            otherData[formIdentifier] = this.state.orderForm[formIdentifier].value
        };

        event.preventDefault();
        const order = {
            ingredients:this.state.ingredients,
            price:this.state.price,
            otherDetails:otherData
        }
        instance.post('/orders.json',order)
        .then(res=>{
            console.log('ContactForm:',res)
            this.props.history.push('/')
        }).catch(error=>console.log(error))
    }
    checkValidation = (rules,value)=>{
        let isValid = false;
        if(rules.required){
        
            if(value.trim() !== '' && value.length >= rules.minimum && value.length <=rules.maximum) isValid = true;
        }

       
        return isValid;

    }
    changeFormHandler=(event,elementIdentifer)=>{
        const updateForm = {
            ...this.state.orderForm
        }
        const updateElement = {
            ...updateForm[elementIdentifer]
        }
        updateElement.value = event.target.value;
        updateElement.valid = this.checkValidation(updateElement.validation,updateElement.value)
        updateForm[elementIdentifer] = updateElement;
        this.setState({orderForm:updateForm})
        console.log(updateElement.valid)
    }
    render(){
        let InputEl = [];
        for(let key in this.state.orderForm){

            InputEl.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }
        let InputElement=null;
        InputElement= InputEl.map((curr)=>(
            <Input key={curr.id} elementtype={curr.config.elementtype} config={curr.config.config} value={curr.config.value} changed={(event)=>this.changeFormHandler(event,curr.id)} /> 
        ))
        return(
            <div className={Style.ContactForm}>
                <h2 style={{textAlign:'center',padding:'20px 0px'}}>Enter Your Details</h2>
                <form onSubmit={this.submitHandler}> 
                  
                    {/* <Input elementtype={} config={} value={} /> */}
                  {/* <Input inputtype="input"type="text" placeholder="Your Name"  />
                  <Input inputtype="input"type="text" placeholder="Your Mail"  />
                  <Input inputtype="input"type="text" placeholder="Your Street"  /> */}
                  {InputElement}
                    <button className={Style.submit} >Submit Details</button>
                </form>
            </div> 
                   );
    }
}
export default ContactForm;