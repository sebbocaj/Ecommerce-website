import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";

import Menu from './header/Menu';
import Home from './home/Home';
import Product_page from './home/products/Product_page';
import Login from './pages_user/Login';
import Register from './pages_user/Register';
import Profile from './pages_user/Profile';
import Admin from './admin/Admin';

import Admin_list_products from './admin/Admin_list_products';
import Admin_item_order from './admin/Admin_item_order';
import Create_product from './admin/Create_product';

import Cart from './cart/Cart';
import Checkout from './cart/Checkout';
import Payment from './cart/Payment';  

import {Products}  from  './api/Products'



export default class App extends React.Component{

		constructor(){
        super()
        this.state = {
           db_products:[]
                }
    	}


	    componentWillMount() {
	    		Tracker.autorun(()=>{		
                        var db_products = Products.find({}).fetch() 
                        this.setState({db_products})                       
                })  
                  
    	}


        render(){

                return(
                <Router>
				    <div className="container">			      
				      <Menu />

				      <hr />
				      
				      <Route exact path="/" component={Home} />
				      <Route exact path="/login" component={Login} />
				      <Route exact path="/register" component={Register} />
				      <Route exact path="/profile" component={Profile} />
				      <Route path="/admin" render={ (props) => (<Admin  {...props} db_products={this.state.db_products}/> ) }/>

				      	<Route path="/product" component={Product_page} />

						<Route exact path="/admin/create_product" component={Create_product} />

						<Route exact path="/admin/order" component={Admin_item_order} />
				    	<Route exact path="/admin/product" render={ (props) => (<Admin_list_products  {...props} db_products={this.state.db_products}/> ) } />

				    	<Route exact path="/cart" component={Cart} />
				    	<Route exact path="/cart/checkout" component={Checkout} />
				    	<Route exact path="/cart/payment" component={Payment} />
		      
				    </div>
				</Router>
                )
        }
}
