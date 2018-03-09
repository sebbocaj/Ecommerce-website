import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Order_confirmation extends React.Component{



        render(){

                return(
              		<div className="Create_product">
              			<h2>Thank you for your money !</h2>

              			<h3>You will receive an email soon with the confirmation of your order</h3>

              			<Link to="/">Go back to Homepage</Link>
              		</div>
                )
        }
}