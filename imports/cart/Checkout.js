import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import {Orders}  from  '../api/Orders'
import {Products}  from  '../api/Products'



export default class Checkout extends React.Component{


    
    onToken =  (token) => {
          Meteor.call(
              'StripeChargeMethod',

              token, 
              this.props.location.state.total, 
              //arg 2,
              (err,data)=>{ 
                 if(err){
                 
                    this.handleError(err)
                 }else if(data){
                 debugger
                    if(data.status == "succeeded"){
                      this.handleSuccess(data)
                }else if(data.type =='StripeInvalidRequestError'){
                    debugger
                      this.handleError(data)
                 }
                }
              }
          )
    }

        constructor(props){
            super(props)

                this.state = {
                        name:'',
                        surname:'',
                        adress:'',
                        email:''                  
                }
                this.handleChange = this.handleChange.bind(this) 
        }


        handleChange (e) {       
                this.setState({[e.target.name]:e.target.value})
        }

        handleSuccess (data) {  
          
           
                
            Orders.insert({
                name : this.state.name,
                surname : this.state.surname,
                adress : this.state.adress,
                email : this.state.email,
                order_products : this.props.location.state.order_products,
                total : this.props.location.state.total
            })

            this.props.location.state.order_products.map((ele) =>{
                var id = ele._id;
                var old_stock = Number(ele.stock);
                var quantity = ele.quantity;
                var newstock = old_stock - quantity
                  debugger
                Products.update({_id : id},{$inc: {stock: newstock}},(e,d)=>{
                })
            } )

            Meteor.call(
              'sendEmailAdmin',
              '<sebastien@barcelonacodeschool.com>',
              'sebbocaj@gmail.com',
              'Order from your Ecommerce website',
              `<div>You just recieve an order : Client: A definir.<br/> For a total of : ${this.props.location.state.total}.</div>`
            );
            Meteor.call(
              'sendEmailClient',
              `${this.state.email}`,
              'sebbocaj@gmail.com',
              'Order from Awsome Store',
              `<div>Your order : Client: A definir.<br/> For a total of : ${this.props.location.state.total}.</div>`
            );
        }

        handleError (data) {
            console.log("trigger client side error")
        }



        render(){

                return(
                <div className="checkout">
                <button onClick={this.handleSuccess.bind(this)}>stock</button>
                    <h1>Checkout</h1>
                	<div className="login">
                        <p>Name : <input onChange={this.handleChange} name='name'  value={this.state.name} /></p>
                        <p>Surname : <input onChange={this.handleChange} name='surname'  value={this.state.surname} /></p>
                        <p>Adress : <input onChange={this.handleChange} name='adress'  value={this.state.adress} /></p>
                        <p>Email : <input onChange={this.handleChange} name='email'  value={this.state.email} /></p>    
                    </div>

                    <div>
                		Total : {this.props.location.state.total}
                	</div>

                    <StripeCheckout
                            token       =  {this.onToken}
                            stripeKey   =  "pk_test_cfRMeQKxGCk6E3UARgKe4KDA"
                            amount      =  {this.props.location.state.total * 100}
                            email       =  {this.state.email}
                            currency    = "EUR"
                    />
                   
                </div>
                )
        }
}