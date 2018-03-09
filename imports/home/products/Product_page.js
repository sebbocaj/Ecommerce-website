import React from 'react'
import {Cart}  from  '../../api/Cart';

export default class Product_page extends React.Component{


	addToCart () {
		Cart.update({id_product:this.props.location.state.id_product},{$inc: {quantity: 1}},{upsert:true})
	}

        render(){

                return(
	                <div className="product_page">
	                     
	                    <img width="50%" src={this.props.location.state.photo} />
	                    
	                    <div>
		                    <h2>{this.props.location.state.title}</h2>
		                    <p> {this.props.location.state.price} </p>
		                    <p> {this.props.location.state.description} </p>
		                    <button onClick={this.addToCart.bind(this)}>Add to cart</button>
	                    </div>
	                </div>

	                
                )
        }
}