import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Item_product extends React.Component{


        render(){

                return(
	                <div className="product">
	                     <Link to="/product">
	                    <img src="http://res.cloudinary.com/dygu6sw0x/image/upload/c_scale,w_250/v1519230414/81510-contact-lenses.jpg" />
	                    </Link>
	                    <div>
		                    <h2>Title of product</h2>
		                    <p> Price </p>
		                    <button>Add to cart</button>
	                    </div>
	                </div>

	                
                )
        }
}