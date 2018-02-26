import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Cart extends React.Component{


        render(){

                return(
                <div className="cart">
                	<h1>Cart</h1>
                	<table>
                		<tr>
                			<th>
                				Item
                			</th>
                			<th>
                				Title
                			</th>
                			<th>
                				Price
                			</th>
                			<th>
                				Quantity
                			</th>
                			<th>
                				Total
                			</th>      			
                		</tr>

                		<tr>
                			<td>
                				<img src="http://res.cloudinary.com/dygu6sw0x/image/upload/c_scale,w_250/v1519230414/81510-contact-lenses.jpg" width="30%" />
                			</td>
                			<td>
                				Title of the product
                			</td>
                			<td>
                				25 €
                			</td>
                			<td>
                				2
                			</td>
                			<td>
                				50 €
                			</td>
                				<td>
                				<button>Delete</button>
                			</td>
                		</tr>
                	</table>

                	<div>
                		<Link to="/cart/checkout"><button>Checkout</button></Link>
                	</div>
                </div>
                )
        }
}