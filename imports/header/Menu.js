import { NavLink } from 'react-router-dom'
import React from "react";


export default class Menu extends React.Component{
 
	logOut () {
		Meteor.logout()
	}


        render(){

        	{
        		
	       		if (this.props.log == 'loggedout') {
	       			var log = <NavLink to="/login">Login</NavLink>
	       			var account = {display: 'none'};
	       			var register = {display: 'inline-block'}
	       		}


	       		else if (this.props.log == 'loggedin') {
	       			var log = <NavLink onClick={this.logOut.bind(this)} to="/">Logout</NavLink>
	       			var account = {display: 'inline-block'};
	       			var register = {display: 'none'};
	       		}
	       	}

                return(

                	<div className="header">
                		<div className="logo">

						    <NavLink to="/">Home</NavLink>
						       
                		</div>
		                <div>
		               		<ul className="menu">
		               		   <li>
						        <NavLink to="/cart" activeClassName= "active">Cart</NavLink>
						       </li>
						       <li>
						       	
						       		{log}
						        
						       </li>
						       <li style={register}>
						        <NavLink to="/register">Register</NavLink>
						       </li>
						       <li style={account}>
						        <NavLink  to="/user">account</NavLink>
						       </li>
						       <li>
						        <NavLink to="/admin/product">Admin</NavLink>
						       </li>
						    </ul>
		                </div>
		            </div>
                )
        }
}

