import React from 'react'
import {Products}  from  '../api/Products'

import Create_product from './Create_product';
import Admin_menu from './Admin_menu';

export default class Admin extends React.Component{



        render(){

                return(
                <div>

                
					<Admin_menu />

					<h1>Hello 'Bob' welcome to your admin page</h1>	
				

                </div>
                )
        }
}