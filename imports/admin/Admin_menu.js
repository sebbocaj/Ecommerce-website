import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";



export default class Admin_menu extends React.Component{

        render(){

                return(


                	<div className="admin_menu">
		               		<ul>
						       <li>
						        <Link to="/admin/product">Products</Link>
						       </li>
						       <li>
						        <Link to="/admin/order">Orders</Link>
						       </li>
						       <li>
						        <Link to="/admin/create_product">Create product</Link>
						       </li>
						    </ul>
		            </div>
		           
                )
        }
}

