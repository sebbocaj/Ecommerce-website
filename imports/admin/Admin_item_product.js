import React from 'react'
import {Products}  from  '../api/Products'
import Upload_image  from  './images_upload/Upload_image'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class Admin_item_product extends React.Component{

        constructor(props){
        super(props)

                this.state = {
                        title:props.title,
                        description:props.description,
                        category:props.category,
                        price:props.price,
                        stock:props.stock,
                        photo:props.photo
                }
                this.Update = this.Update.bind(this)
                this.handleChange = this.handleChange.bind(this)
                this.get_Photo_id = this.get_Photo_id.bind(this)
                this._onSelect = this._onSelect.bind(this)
        }

        handleChange (e) {       
                this.setState({[e.target.name]:e.target.value})
        }

        get_Photo_id (photo_id) {
                
                this.setState({photo:photo_id})
        }

        _onSelect (options) {
                this.setState({category:options.value})
        }

        Update () { 

            Meteor.call (
                'updateProduct',
                    this.props.id,
                    this.state.title, 
                    this.state.description, 
                    this.state.category,
                    this.state.price,
                    this.state.stock,
                    this.state.photo
                )
                
                
        }

        Delete () {
            Meteor.call (
                'removeProduct',
                this.props.id
                )
        }
   

        render(){

                const options = ['Cat_1', 'Cat_2', 'Cat_3']

                return(
                <tr>                	
                			<td>
                			     <Upload_image 
                                                photo_state={this.state.photo}
                                                get_Photo_id={this.get_Photo_id}/>
                			</td>
                			<td>
                                              <input onChange={this.handleChange} name='title'  value={this.state.title} />
                			</td>
                			<td>
                			      <input onChange={this.handleChange} name='description'  value={this.state.description} />
                			</td>
                			<td>
                                                <Dropdown className="dropdown" value={this.state.category} options={options} onChange={this._onSelect}  placeholder="Select Category" />    
                			</td>
                			<td>
                			     <input onChange={this.handleChange} name='price'  value={this.state.price} />
                			</td>
                			<td>
                			      <input onChange={this.handleChange} name='stock'  value={this.state.stock} />
                			</td>
                                        <td>
                                                <button onClick={this.Update.bind(this)}>Update</button>
                                              <button onClick={this.Delete.bind(this)}>Delete</button>
                                        </td>
                        </tr>
                )
        }
}