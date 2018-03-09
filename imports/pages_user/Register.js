import React from 'react'


export default class Register extends React.Component{

    constructor () {
        super()
        this.state = {
            name:'',
            surname:'',
            email:'',
            password:'',
            password_check:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }


    registerUser (e) {
        e.preventDefault()
        let profile = {name:this.state.name, surname:this.state.surname}
        Meteor.call('createUserInServer', `${this.state.email}`, `${this.state.password}`, {profile}, (err)=> {
            if (err) {
                alert('all field should be filled')
            }
            else {
                this.props.history.push( {                
                  pathname:'/login', 
                     state: {email: this.state.email}
             })
            } 
        })
           
    }



        render(){
            

            if (this.state.password == this.state.password_check) {
                var password = {display:'none'}
            }
            else if (this.state.password != this.state.password_check) {
                var password = {color : 'red', display:'block'}            
            }

                return(
                <div>
                    <h1>Register</h1>    
                    <div className="register">
                    <form  onChange = {this.handleChange}>
                            <p>Name : <input name="name" required/></p>
                            <p>Surname : <input name="surname" required/></p>
                            <p>E-mail : <input name="email" required  type="email"/></p>
                            <p>Password <input name="password" required/></p>
                            <p>Confirm password <input name="password_check" required/></p>
                            <span style={password}>Passwords should be the same</span>
                            <button onClick={this.registerUser.bind(this)}>Register</button>
                    </form>
                    </div>
                </div>
                )
        }
}