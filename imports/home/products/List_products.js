import React from 'react'
//import Search from '../bar/Search';
import Price_filter from '../bar/Price_filter';
import Category_filter from '../bar/Category_filter';
import Item_product from './Item_product';

export default class List_products extends React.Component{

        constructor(){
            
                super()
                this.state = {
                       cat:'All',
                       filter_price:'',
                       //search_result:[]
                       
                }
                this.filterCategory = this.filterCategory.bind(this)
                this.filterPrice = this.filterPrice.bind(this)
        }

        filterCategory(data) {
            this.setState({cat: data})
        }

        filterPrice(data) {
            this.setState({filter_price: data})
        }

        // search(data) {
            
        //     let db_products_search = this.props.db_products.filter((ele) => {
        //       return ele.title.includes(data)

        //     });
        //         this.setState({search_result : db_products_search })                
        // }


        render(){
            
      
            if (this.state.filter_price == 'Ascending-price') {
                var db_products_sorted = this.props.db_products.sort((a, b) => ( a.price - b.price )) 
                   
            }

            else if (this.state.filter_price == 'Descending-price') {
                var db_products_sorted = this.props.db_products.sort((a, b) => ( b.price - a.price ))    
            }

            else {
                var db_products_sorted = this.props.db_products   
            }

                return(

                		<div>
                    <div className="bar">
	                    
	                    <Price_filter  filterPrice={this.filterPrice}/>
	                    <Category_filter filterCategory={this.filterCategory}/>
	                </div>
	                    <div className="products">
	                {
                        db_products_sorted.map ((ele, i)=>{
                            

                                if (ele.category == this.state.cat) {
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
                                }

                                else if (this.state.cat == 'All')
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