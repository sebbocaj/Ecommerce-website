import React from 'react'
import Search from '../bar/Search';
import Filter from '../bar/Filter';
import Category_filter from '../bar/Category_filter';
import Item_product from './Item_product';

export default class List_products extends React.Component{


        render(){

                return(

                		<div>
                    <div className="bar">
	                    <Search />
	                    <Filter />
	                    <Category_filter />
	                </div>
	                    <div className="products">
	                {
                        this.props.db_products.map ((ele, i)=>{
                                return <Item_product 
                                        title = {ele.title}
                                        description = {ele.description}
                                        category = {ele.category}
                                        photo = {ele.photo}
                                        price = {ele.price}
                                        stock = {ele.stock}
                                        key  = {i}
                                        id   = {ele._id}
                                        /> 
                        	})
                		}
                		</div>
                	</div>
	                
                )
        }
}