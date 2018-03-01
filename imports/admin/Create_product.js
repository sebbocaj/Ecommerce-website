import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Products}  from  '../api/Products'
import Upload_image  from  './images_upload/Upload_image'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class Create_product extends React.Component{

        constructor(){
                super()
                this.state = {
                       title:'',
                        description:'',
                        category:'',
                        price:0,
                        stock:0,
                        photo:''
                }
                this._onSelect = this._onSelect.bind(this)
                this.get_Photo_id = this.get_Photo_id.bind(this)
        }


        handleChange(e) {
                this.setState({ [e.target.name]: e.target.value });      
        }

        _onSelect (options) {
                this.setState({category:options.value})
        }

        get_Photo_id (photo_id) {
                this.setState({photo:photo_id})
        }
 

        createProduct () {
                
                Products.insert({       title: this.state.title, 
                                        description: this.state.description, 
                                        category: this.state.category, 
                                        price: this.state.price, 
                                        stock: this.state.stock, 
                                        photo: this.state.photo
                                })

        }


        render(){

                const options = ['Cat_1', 'Cat_2', 'Cat_3']
                

                return(



                <div className="Create_product">


                	<h1>Create a new product</h1>
                	<table>
                		<tr>
                			<th>
                				Photo
                			</th>
                			<th>
                				Title
                			</th>
                			<th>
                				Description
                			</th>
                			<th>
                				Category
                			</th>
                			<th>
                				Quantity
                			</th>
                			<th>
                				Price
                			</th>      			
                		</tr>

                		<tr>
                			<td>
                				<Upload_image 
                                                photo_state={this.state.photo}
                                                get_Photo_id={this.get_Photo_id}/>
                			</td>
                			<td>
                				<input name="title" onChange={this.handleChange.bind(this)}/>
                			</td>
                			<td>
                				<input name="description" onChange={this.handleChange.bind(this)}/>
                			</td>
                			<td>
                				<Dropdown className="dropdown" value={this.state.category} options={options} onChange={this._onSelect}  placeholder="Select Category" />
                                                
                			</td>
                			<td>
                				<input name="stock" onChange={this.handleChange.bind(this)}/>
                			</td>
                			<td>
                				<input name="price" onChange={this.handleChange.bind(this)}/>
                			</td>
                		</tr>
                	</table>

                	<div>
                		<button onClick={this.createProduct.bind(this)}><Link to="/admin/product">Create</Link></button>
                	</div>
                </div>
                )
        }
}