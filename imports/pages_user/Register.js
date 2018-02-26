import React from 'react'

export default class Register extends React.Component{


        render(){

                return(
                <div>
                    <h1>Register</h1>    
                    <div className="register">
                            <p>Name : <input /></p>
                            <p>Surname : <input /></p>
                            <p>E-mail : <input /></p>
                            <p>Password : <input /></p>
                            <p>Confirm password : <input /></p>
                            <button>Register</button>
                    </div>
                </div>
                )
        }
}