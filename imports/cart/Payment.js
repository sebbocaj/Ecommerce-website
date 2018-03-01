import React from 'react'


export default class Payment extends React.Component{

	onPayment() {
		Orders.insert({order_products: cartfororder, order_total: this.state.total})
	}

        render(){

                return(
                <div className="payment">
                   <h1>Widget</h1>
                </div>
                )
        }
}