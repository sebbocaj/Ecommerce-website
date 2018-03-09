import React from 'react'
import Admin_item_product from './Admin_item_product';

export default class Admin_list_products extends React.Component{

	


        render(){

                return(
                <div>
                    <h1>Products</h1>
                        <table className="admin_product">
                                <tbody>
                        		<tr>
                        			<th>
                        				Photo
                        			</th>
                        			<th>
                        				Title
                        			</th>
                        			<th>
                        				Description
                        			</th>
                        			<th>
                        				Category
                        			</th>
                        			<th>
                        				Quantity
                        			</th>
                        			<th>
                        				Price
                        			</th>
                                                <th>
                                                        
                                                </th>         			
                        		</tr>
                        		
                        		{
                                this.props.db_products.map ((ele, i)=>{
                                        return <Admin_item_product 
                                                title = {ele.title}
                                                description = {ele.description}
                                                category = {ele.category}
                                                photo = {ele.photo}
                                                price = {ele.price}
                                                stock = {ele.stock}
                                                key  = {i}
                                                id   = {ele._id}
                                                /> 
                                	})
                        		}
                                </tbody>
                        </table>
                </div>
 				)
        }
}

