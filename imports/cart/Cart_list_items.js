import React from 'react'
import Cart_item from './Cart_item';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Products}  from  '../api/Products'
import {Cart}  from  '../api/Cart'
import {Orders}  from  '../api/Orders'

export default class Cart_list_items extends React.Component{

    constructor(){
        super()
        this.state = {
           			cart:[],
           			total:0,
           			allcart:[],
           			order_products:[]
                }
                
				this.updateQuantity = this.updateQuantity.bind(this)
				this.Delete = this.Delete.bind(this)
        }

	componentWillMount() {

		Tracker.autorun(()=> {
			var list = []

			var total = 0
			var allcart = Cart.find({}).fetch()
				allcart.map((ele) =>{					
					list.push(ele.id_product)				
				})
				var cart = Products.find({ _id: {$in : list}}).fetch();       
				cart.map ((ele, i) => {
					allcart[i].price = ele.price
				})
				allcart.map((ele) => {
				total += parseInt(Number(ele.price * ele.quantity))	
				})
				this.setState({total, allcart, cart})

		})
	}

	updateQuantity(qt, id_product) {
		Cart.update({id_product:id_product},{$inc: {quantity: qt}})
	}

	Delete = (id) => {
		Cart.remove({_id: id})
	}

    addOrder () {
        var cartfororder = this.state.cart
        this.state.allcart.map ((ele, i) => {
                    cartfororder[i].quantity = ele.quantity

                })

        this.props.history.push( {                
              pathname:'/cart/checkout', 
                 state: {total: this.state.total, order_products: cartfororder}
         })
    }

        render(){

            if(this.state.allcart.length == 0) {
                return (<h1>Your cart is empty</h1>)
             }

             else {

                return(
          			<div>
						<h1>Cart</h1>
                	 <table className="cart">
                		<tbody>
                		<tr>
                			<th>
                				Photo
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
                			<th>
                				
                			</th>       			
                		</tr>
                    
                    	
	                    
	                {
                        this.state.cart.map ((ele, i)=>{
                                return <Cart_item 
                                        title = {ele.title}
                                        price = {ele.price}
                                        stock = {ele.stock}
                                        photo = {ele.photo}
                                        key  = {i}
                                        id_product = {ele._id}

                                        Delete = {this.Delete}
                                        updateQuantity = {this.updateQuantity}
                                        allcart = {this.state.allcart}
                                        /> 
                        	})
                		}
                		
                		</tbody>
                	</table>

                	<div className="cart_total">
                	
                		Total : {this.state.total}
                	</div>
                		
                	<div className="center">

                    <button className="buttonCart" onClick={this.addOrder.bind(this)}>Checkout</button>


                	</div>
	              </div>
                )
            }
        }
}