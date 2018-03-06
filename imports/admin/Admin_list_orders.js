import React from 'react'
import Admin_item_order from './Admin_item_order';

export default class Admin_list_orders extends React.Component{

componentWillMount() {

}


        render(){

                return(
                <div>
                	<h1>See orders</h1>
                	<table className="admin_display_orders">
                		<tr>
                		
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
                        Price
                      </th>
                			<th>
                				Quantity
                			</th>
                			<th>
                				Total
                			</th>      			
                		</tr>
                    </table>



                                          {
                        this.props.db_orders.map ((ele, i)=>{
                                return <Admin_item_order 
                                        name = {ele.name}
                                        surname = {ele.surname}
                                        total = {ele.total}
                                        key  = {i}
                                        id   = {ele._id}

                                        order_products = {ele.order_products}
                                       
                                        /> 
                          })
                    }

                	

                </div>
                )
        }
}