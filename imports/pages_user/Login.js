import React from 'react'

export default class Login extends React.Component{


        render(){

                return(
                <div>
                    <h1>Login</h1>
                	<div className="login">
                        <p>E-mail : <input /></p>
                        <p>Password : <input /></p>
                        <button>Login</button>
                    </div>
                <p>Not Register ? <a href="">Click here</a></p>

                </div>
                )
        }
}