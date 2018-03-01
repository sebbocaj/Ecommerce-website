import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Cart}  from  '../../api/Cart';

export default class Item_product extends React.Component{

	addToCart () {
		
		Cart.update({id_product:this.props.id}, {$inc: {quantity: 1}},{upsert:true})
	}


        render(){
        	
                return(
	                <div className="product">

						<Link to={{
						  pathname: `/product/${this.props.id}`,
						  state: { title:this.props.title,
						  			description: this.props.description,
						  			price:this.props.price,
						  			photo:this.props.photo,
						  			id_product:this.props.id
						  			 }
						}}>
						<img width="50%"src={this.props.photo} />
						 </Link>

	                   
	                    <div>
		                    <h2>{this.props.title}</h2>
		                    <p>Price : {this.props.price} </p>
		                    <p>Stock : {this.props.stock} </p>
		                    <button onClick={this.addToCart.bind(this)}>Add to cart</button>
	                    </div>
	                </div>

	                
                )
        }
}