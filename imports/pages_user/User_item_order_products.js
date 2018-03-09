import React from 'react'

export default class User_item_order_products extends React.Component{


        render(){

        	var total = this.props.price * this.props.quantity;

                return(

                	 	<tr>
                	 		<td>
                	 			<img src={this.props.photo}  width="30%" />
                	 		</td>
                	 		<td>
                	 			{this.props.title}
                	 		</td>
                	 		<td>
                	 			{this.props.price}
                	 		</td>
                	 		<td>
                	 			{this.props.quantity}
                	 		</td>
                	 		<td>
                	 			{total} €
                	 		</td>
                	 	</tr>
                	 	
                )
        }
}