import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";


export default class Menu extends React.Component{
 
	logOut () {
		Meteor.logout()
	}


        render(){

        	{
        		
	       		if (this.props.log == 'loggedin') {
	       			var log = <Link to="/login">Login</Link>
	       		}
	       		else if (this.props.log == 'loggedout') {
	       			var log = <Link onClick={this.logOut.bind(this)} to="/">Logout</Link>
	       		}
	       	}

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
						       	
						       		{log}
						        
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

