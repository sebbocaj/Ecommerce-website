import React from 'react'
import Search from './bar/Search';
import Filter from './bar/Filter';
import Category_filter from './bar/Category_filter';
import Item_product from './products/Item_product';

export default class Home extends React.Component{


        render(){

                return(
                <div>
                    <div className="bar">
	                   
	                    <Filter />
	                    <Category_filter />
	                </div>
	                
	                <div className="products">
	                	<Item_product />
	                </div>

                </div>
                )
        }
}