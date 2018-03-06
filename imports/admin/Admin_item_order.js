import React from 'react'
import Admin_item_order_product from './Admin_item_order_product';

export default class Admin_item_order extends React.Component{


        render(){

                return(
       
                	
        		<table className="admin_order_product1">
        		      <tr>
        			<td>
        				{this.props.name}
        			</td>

                                
                                  <td>             
                                {
                                        this.props.order_products.map ((ele, i)=>{
                                                return <Admin_item_order_product 
                                                        title = {ele.title}
                                                        category = {ele.category}
                                                        price = {ele.price}
                                                        quantity  = {ele.quantity}
                                                        
                                                        id   = {ele._id}
                                                        key  = {i}
                                                                                               
                                                        /> 
                                                })
                                        }

                                </td>
                	       </tr>

                               <tr>
                                <td colspan="6">
                                       <b> Total </b>: {this.props.total}
                                </td>
                               </tr>
                        </table>
                )
        }
}