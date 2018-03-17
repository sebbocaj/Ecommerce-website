import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import {Orders}  from  '../api/Orders'
import {Products}  from  '../api/Products'


export default class Checkout extends React.Component{

    constructor(props){
        super(props)

            this.state = {
                    name:'',
                    surname:'',
                    adress:'',
                    email:'',
                    id:''                  
            }
            this.handleChange = this.handleChange.bind(this) 
    }

    componentWillMount() {
      if (this.props.log == "loggedin") {
          Tracker.autorun(()=>{
                  var user = Meteor.user()
                  if(user){
                    
                      var id = user._id
                      var email = user.emails[0].address
                      var name = user.profile.profile.name
                      var surname = user.profile.profile.surname

                    this.setState({email:email, name: name, surname: surname, id:id}) 
                      
                  }
          })
      }
    }

    
    onToken =  (token) => {
          Meteor.call(
              'StripeChargeMethod',

              token, 
              this.props.location.state.total * 100, 
              //arg 2,
              (err,data)=>{ 
                 if(err){
                    this.handleError(err)
                 }else if(data){
                 
                    if(data.status == "succeeded"){
                      this.handleSuccess(data)
                }else if(data.type =='StripeInvalidRequestError'){
                      this.handleError(data)
                 }
                }
              }
          )
    }


        handleChange (e) {       
                this.setState({[e.target.name]:e.target.value})
        }

        handleSuccess (data) {  

            Meteor.call (
                'createOrder',
                this.state.name,
                this.state.surname,
                this.state.adress,
                this.state.email,
                this.props.location.state.order_products,
                this.props.location.state.total,
                this.state.id
              )

            this.props.location.state.order_products.map((ele) =>{
                var id = ele._id;
                var quantity = Number(ele.quantity);

                Meteor.call (
                    'updateStock',
                    id,
                    quantity
                  )
                //Products.update({_id : id},{$inc: {stock: - quantity}})
            })

            Meteor.call(
              'sendEmailAdmin',
              '<sebastien@barcelonacodeschool.com>',
              'sebbocaj@gmail.com',
              'Order from your Ecommerce website',
              `<div>You just receive an order from client: ${this.state.name} ${this.state.surname}.<br/><br/> For a total of : ${this.props.location.state.total} €.</div>`
            );
            Meteor.call(
              'sendEmailClient',
              `${this.state.email}`,
              'sebbocaj@gmail.com',
              'Order from Awsome Store',
              `<div>Hello ${this.state.name}<br/><br/>Thank you for your order.<br/><br/>Total : ${this.props.location.state.total}.</div>`
            );

            this.props.history.push('/cart/order-confirmation')
        }



        handleError (data) {
            alert(`You don't have money in your account ! Bye !!`)
        }



        render(){

            if (this.props.log == "loggedout") {
              var name = <p><span>Name : </span><input onChange={this.handleChange} name='name'  value={this.state.name} /></p>
              var surname = <p><span>Surname : </span><input onChange={this.handleChange} name='surname'  value={this.state.surname} /></p>
              var email = <p><span>Email : </span><input onChange={this.handleChange} name='email'  value={this.state.email} /></p>
            }

            else if (this.props.log == "loggedin") {
              var name = <p><span>Name : {this.state.name} </span></p>
              var surname = <p><span>Surname : {this.state.surname} </span></p>
              var email = <p><span>Email : {this.state.email} </span></p>
            }



                return(
                <div>
                    <h1>Checkout</h1>
                	<div className="checkout">
                        {name}
                        {surname}
                        <p><span>Address : </span><input onChange={this.handleChange} name='adress'  value={this.state.adress} /></p>
                         {email}   
                    </div>

                    <p>
                		Total :<b> {this.props.location.state.total}</b>
                	</p>
                   <div>
                    <StripeCheckout
                            token       =  {this.onToken}
                            stripeKey   =  "pk_test_cfRMeQKxGCk6E3UARgKe4KDA"
                            amount      =  {this.props.location.state.total * 100}
                            email       =  {this.state.email}
                            currency    = "EUR"
                    />
                   </div>
                </div>
                )
        }
}