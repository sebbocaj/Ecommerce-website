import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Checkout extends React.Component{


        render(){

                return(
                <div className="checkout">
                    <h1>Checkout</h1>
                	<div className="login">
                        <p>Name : Bob</p>
                        <p>Surname : Eponge</p>
                        <p>Adress : 25 carrer de Muntaner</p>
                        <p>Email : bobeponge@gmail.com</p>    
                    </div>

                    <div>
                		Total : 152 €
                	</div>

                    <div>
                		<Link to="/cart/payment"><button>Payment</button></Link>
                	</div>

                </div>
                )
        }
}