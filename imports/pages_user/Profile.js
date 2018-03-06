import React from 'react'
import { Accounts } from 'meteor/accounts-base'

export default class Profile extends React.Component{

    constructor () {
        super()
        this.state = {
            email:'',
            name:'',
            surname:'',
            id:''
        }
    }

    componentWillMount () {
    Tracker.autorun(()=>{
        var user = Meteor.user()
        if(user){
            var id = user._id
            var email = user.emails[0].address
            var name = user.profile.profile.name
            var surname = user.profile.profile.surname

            this.setState({email:email, name: name, surname: surname, id:id}) 
            this.setState({user:user})
        }
    })
}

    handleChange(e) {
        this.setState({email: e.target.value})
    }


     changeMail () {
        Meteor.call ('updateEmail', Meteor.userId(), this.state.email )
     }


    

        render(){

                return(
                <div>
                    <h1>Profile</h1>
                    <div className="profile">
                            <p>Name : {this.state.name}</p>
                            <p>Surname : {this.state.surname}</p>
                            <p>E-mail : <input onChange={this.handleChange.bind(this)} value={this.state.email}/> 
                                <button onClick={this.changeMail.bind(this)}>Modify</button></p>

                    </div>
                </div>
                )
        }
}