import React from 'react'
import User_order_item from './User_order_item';


export default class User_list_orders extends React.Component{


	constructor(props){
        super(props)

            this.state = {
                    user_orders:'',               
            }
    }



        render(){

                return(
                <div>
                	<h1>See your orders</h1>
                	<table className="user_order">
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
                		</tr>
                        </tbody>
                    </table>


                    {
                        this.props.user_orders.map ((ele, i)=>{
                                return <User_order_item 
                                        total = {ele.total}
                                        key  = {i}
                                        order_products = {ele.order_products}
                                       
                                        /> 
                          })
                    }
                              

                	

                </div>
                )
        }
}