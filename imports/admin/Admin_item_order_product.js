import React from 'react'

export default class Admin_item_order_product extends React.Component{


        render(){

        	var total = this.props.price * this.props.quantity;

                return(
               <table className="admin_order_product2">
               <tr>
                	<td>
                		{this.props.title}
                	</td>

                	<td>
                		{this.props.category}
                	</td>

                	<td>
                		{this.props.price}
                	</td>

                	<td>
                		{this.props.quantity}
                	</td>
                	<td>
                		{total}
                	</td>
                </tr>
                </table>
                )
        }
}