import React from 'react'
import {Products}  from  '../api/Products'

export default class Admin_item_product extends React.Component{

        constructor(){
        super()

                this.state = {
                        invisible:'invisible',

                }

                this.Update = this.Update.bind(this)
                this.showInput = this.showInput.bind(this)
        }


        Update (e) {
                debugger
                Products.update({_id: this.props.id},{$set: {[e.target.name]: e.target.value}})
        }

        Delete () {

                Products.remove({_id: this.props.id})
        }

        showInput () {
                this.setState({invisible:'visible'})
        }
   


        render(){

                return(
                <tr>
                	
                			<td>
                			     <img src={this.props.photo} width="30%" /><br/><button>Change</button>
                			</td>
                			<td>
                			      {this.props.title}<br/><button onClick={this.showInput}>Change</button>
                                              <div className={this.state.invisible}><input /><button name='title'  onClick={this.Update}>update</button></div>
                			</td>
                			<td>
                			      {this.props.description}<br/><button>Change</button>
                			</td>
                			<td>
                			        {this.props.category} <br/><button>Change</button>
                			</td>
                			<td>
                			     {this.props.stock} <br/><button>Change</button>
                			</td>
                			<td>
                			      {this.props.price} <br/><button>Change</button>
                			</td>
                                        <td>
                                              <button onClick={this.Delete.bind(this)}>Delete</button>
                                        </td>
                        </tr>
                )
        }
}