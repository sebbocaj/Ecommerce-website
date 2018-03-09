import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class Price_Filter extends React.Component{


filterPrice(options) {
		this.props.filterPrice(options.value)
	}

        render(){

        	const options = ['Ascending-price', 'Descending-price']

                return(
	                <div>

	                <Dropdown className="dropdown" value={options[0]} options={options} onChange={this.filterPrice.bind(this)}  placeholder="Sorting by price" />
	                  
	                </div>
                )
        }
}