import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";

import Menu from './header/Menu';
import List_products from './home/products/List_products';
import Product_page from './home/products/Product_page';
import Login from './pages_user/Login';
import Register from './pages_user/Register';
import Profile from './pages_user/Profile';
import Admin from './admin/Admin';

import User from './pages_user/User';


import Admin_list_products from './admin/Admin_list_products';
import Admin_list_orders from './admin/Admin_list_orders';
import Create_product from './admin/Create_product';

import Cart_list_items from './cart/Cart_list_items';
import Checkout from './cart/Checkout';
import Order_confirmation from './cart/Order_confirmation';  

import {Products}  from  './api/Products'
import {Cart}  from  './api/Cart'
import {Orders}  from  './api/Orders'



export default class App extends React.Component{

		constructor(){
        super()
        this.state = {
           db_products:[],
           db_orders:[],
           log:'',
          
                }
    	}


	    componentWillMount() {
	    		Tracker.autorun(()=>{		
                        var db_products = Products.find({}).fetch() 
                        this.setState({db_products}) 
                        var db_orders = Orders.find({}).fetch()
                        this.setState({db_orders})  

                        var logstate = Meteor.user()
				    		if (logstate != null) {
				    			this.setState({log: 'loggedin'})
				    		}

				    		else {
				    			this.setState({log: 'loggedout'})
				    		}
				                           
                })        
    	}




        render(){

                return(
                <Router>
				    <div className="container">			      
				      <Menu log = {this.state.log}/>

				      <hr style={{color:'black'}}/>
				      
				      <Route exact path="/"  render={ (props) => (<List_products  {...props} db_products={this.state.db_products}/> ) } /> 
				      <Route exact path="/login" render={ (props) => (<Login  {...props} log={this.state.log}/> ) }/>
				      <Route exact path="/register" component={Register} />
				      
				      <Route path="/admin" render={ (props) => (<Admin  {...props} db_products={this.state.db_products}/> ) }/>

				      	<Route path="/product" component={Product_page} />

				      	<Route exact path="/user" component={User} />

						<Route exact path="/admin/create_product" component={Create_product} />

						<Route exact path="/admin/order" render={ (props) => (<Admin_list_orders  {...props} db_orders={this.state.db_orders}/> ) } />
				    	<Route exact path="/admin/product" render={ (props) => (<Admin_list_products  {...props} db_products={this.state.db_products}/> ) } />

				    	<Route exact path="/cart" component={Cart_list_items} />
				    	<Route exact path="/cart/checkout" render={ (props) => (<Checkout  {...props} log={this.state.log}/> ) }/>
				    	<Route exact path="/cart/order-confirmation" component={Order_confirmation} />
		      
				    </div>
				</Router>
                )
        }
}

