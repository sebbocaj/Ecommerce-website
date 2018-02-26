import React from 'react'

export default class Admin_item_order extends React.Component{


        render(){

                return(
                <div className="Create_product">
                	<h1>See orders</h1>
                	<table>
                		<tr>
                			<th>
                				ID
                			</th>
                			<th>
                				Client
                			</th>
                			<th>
                				Product Title
                			</th>
                			<th>
                				Category
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
                				001
                			</td>
                			<td>
                				Donald
                			</td>
                			<td>
                				Title of the product
                			</td>
                			<td>
                				Category of the product
                			</td>
                			<td>
                				2
                			</td>
                			<td>
                				55 €
                			</td>
                		</tr>
                	</table>

                	<div>
                		<button>Create</button>
                	</div>
                </div>
                )
        }
}