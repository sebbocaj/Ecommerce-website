import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class Category_filter extends React.Component{

	constructor(){
                super()
                this.state = {
                       category:''
                }
        }


	filterCategory(options) {
		this.props.filterCategory(options.value)
		this.setState({category: options.value})
	}

        render(){

        	const options = ['All', 'Cat_1', 'Cat_2', 'Cat_3']

                return(
	                <div>

	                <Dropdown className="dropdown" value={this.state.category} options={options} onChange={this.filterCategory.bind(this)}  placeholder="Select Category" />
	                  
	                </div>
                )
        }
}