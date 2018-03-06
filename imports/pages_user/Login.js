import React from 'react'
import {Accounts}       from 'meteor/accounts-base'

export default class Login extends React.Component{

    constructor () {
        super()
        this.state = {
            email:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    logIn () {     
        var email = this.state.email
        var password = this.state.password
        
        Meteor.loginWithPassword( 
                {email},password,(err=>{
                      if(err){
                          alert('Email or password are wrong !')
                      }else{
                  alert('you are logged-in !')
                      }
                })
        ) 
    }

        render(){

                return(
                <div>
                    <h1>Login</h1>
                	<div className="login">
                        <p>E-mail : <input name="email" onChange = {this.handleChange} /></p>
                        <p>Password : <input name="password" onChange = {this.handleChange} /></p>
                        <button onClick={this.logIn.bind(this)}>Login</button>
                    </div>
                <p>Not Register ? <a href="">Click here</a></p>

                </div>
                )
        }
}