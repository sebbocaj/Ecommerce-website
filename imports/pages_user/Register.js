import React from 'react'


export default class Register extends React.Component{

    constructor () {
        super()
        this.state = {
            name:'',
            surname:'',
            email:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }



    registerUser () {
        let profile = {name:this.state.name, surname:this.state.surname}
        Meteor.call('createUserInServer', `${this.state.email}`, `${this.state.password}`, {profile})
    }



        render(){

                return(
                <div>
                    <h1>Register</h1>    
                    <div className="register">
                            <p>Name : <input name="name" onChange = {this.handleChange} /></p>
                            <p>Surname : <input name="surname" onChange = {this.handleChange} /></p>
                            <p>E-mail : <input name="email" onChange = {this.handleChange} /></p>
                            <p>Password <input name="password" onChange = {this.handleChange} /></p>
                            <p>Confirm password <input /></p>
                            <button onClick={this.registerUser.bind(this)}>Register</button>
                    </div>
                </div>
                )
        }
}