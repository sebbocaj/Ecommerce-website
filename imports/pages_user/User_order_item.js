import React from 'react'
import User_item_order_products from './User_item_order_products';

export default class User_order_item extends React.Component{


        render(){

        	

                return(
               			<table className="user_order">
               			<tr>
               				<th colspan="5">Total order  : {this.props.total} €</th>
               			</tr>
                	 {
                        this.props.order_products.map ((ele, i)=>{
                                return <User_item_order_products 
                                        	photo = {ele.photo}
                                        	title = {ele.title}
                                        	price = {ele.price}
                                        	quantity = {ele.quantity}
                                        	
                                        	key={i}
                                       
                                        /> 
                          })
                    }
                    </table>

                )
        }
}