import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Checkout extends React.Component{

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



        render(){

                return(
                <div className="checkout">
                    <h1>Checkout</h1>
                	<div className="login">
                        <p>Name : <input onChange={this.handleChange} name='name'  value={this.state.name} /></p>
                        <p>Surname : <input onChange={this.handleChange} name='surname'  value={this.state.surname} /></p>
                        <p>Adress : <input onChange={this.handleChange} name='adress'  value={this.state.adress} /></p>
                        <p>Email : <input onChange={this.handleChange} name='email'  value={this.state.email} /></p>    
                    </div>

                    <div>
                	
                	</div>

                    <div>
                		
                	</div>

                </div>
                )
        }
}