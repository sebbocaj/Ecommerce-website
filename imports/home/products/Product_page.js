import React from 'react'

export default class Product_page extends React.Component{


        render(){

                return(
	                <div className="product_page">
	                     
	                    <img src="http://res.cloudinary.com/dygu6sw0x/image/upload/c_scale,w_250/v1519230414/81510-contact-lenses.jpg" />
	                    
	                    <div>
		                    <h2>Title of product</h2>
		                    <p> Price </p>
		                    <p> Description of the product </p>
		                    <button>Add to cart</button>
	                    </div>
	                </div>

	                
                )
        }
}