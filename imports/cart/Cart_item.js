import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Cart extends React.Component{
        
        constructor(props){
                super(props)
                this.state = {
                                quantity:0,
                                total:0,
                                id:''
                }
        }


        componentWillMount() {
                this.props.allcart.map ((ele) => {
                                if (ele.id_product == this.props.id_product) {
                                        this.setState({quantity: ele.quantity})
                                        this.setState({id:ele._id})
                                }    
                        }
                )   
        }

        componentDidMount() {
                this.setState({total:this.props.price * this.state.quantity})
        }

        

        addQuantity() {

                this.setState({quantity:this.state.quantity + 1}, () => {
                      this.setState({total:this.props.price * this.state.quantity})
                this.props.updateQuantity (1, this.props.id_product)
                })
        }


        removeQuantity() {
                
                this.setState({quantity:this.state.quantity - 1}, () => {
                      this.setState({total:this.props.price * this.state.quantity})
                this.props.updateQuantity (-1, this.props.id_product)
                })
        }

        delete() {
                this.props.Delete(this.state.id)
        }



        render(){
               
                return(
                
                        

                		<tr>
                			<td>
                				<img src={this.props.photo} width="30%" />
                			</td>
                			<td>
                			    {this.props.title}	
                			</td>
                			<td>
                			     {this.props.price}
                			</td>
                			<td>
                			     <button onClick={this.removeQuantity.bind(this)}>-</button>
                                                {this.state.quantity}
                                             <button onClick={this.addQuantity.bind(this)}>+</button>
                			</td>
                			<td>
                				{this.state.total}
                			</td>
                				<td>
                				<button onClick={this.delete.bind(this)}>Delete</button>
                			</td>
                		</tr>
                	
                
                )
        }
}