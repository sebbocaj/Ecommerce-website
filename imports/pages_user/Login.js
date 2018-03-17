import React from 'react'
import {Accounts} from 'meteor/accounts-base'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Login extends React.Component{

    constructor () {
        super()
        this.state = {
            email:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        
        if(this.props.location.state != undefined) {
        this.setState({email: this.props.location.state.email})
        }
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
                        <p><span>E-mail : </span><input name="email" onChange = {this.handleChange} value={this.state.email} /></p>
                        <p><span>Password : </span><input name="password" onChange = {this.handleChange} /></p>
                        <button className="buttonLogin" onClick={this.logIn.bind(this)}>Login</button>
                    </div>
                <p>Not Register ? <Link to="/register">Register</Link></p>

                </div>
                )
        }
}