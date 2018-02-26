import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";



export default class Menu extends React.Component{


        render(){

                return(

                	<div className="header">
                		<div className="logo">

						    <Link to="/">Home</Link>
						       
                		</div>
		                <div>
		               		<ul className="menu">
		               		   <li>
						        <Link to="/cart">Cart</Link>
						       </li>
						       <li>
						        <Link to="/login">Login</Link>
						       </li>
						       <li>
						        <Link to="/register">Register</Link>
						       </li>
						       <li>
						        <Link to="/profile">Profile</Link>
						       </li>
						       <li>
						        <Link to="/admin/product">Admin</Link>
						       </li>
						    </ul>
		                </div>
		            </div>
                )
        }
}

