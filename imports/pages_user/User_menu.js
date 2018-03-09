import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";



export default class User_menu extends React.Component{

	changePage(data) {
		this.props.changePage(data)
	}

        render(){

                return(


                	<div className="admin_menu">
		               		<ul>
						       <li>
						        <a onClick={this.changePage.bind(this, 'profile')}>Profile</a>
						       </li>
						       <li>
						        <a onClick={this.changePage.bind(this, 'orders')}>Orders</a>
						       </li>
						     
						    </ul>
		            </div>
		           
                )
        }
}

