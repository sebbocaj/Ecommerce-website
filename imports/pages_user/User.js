import React from 'react'
import {Orders}  from  '../api/Orders'
import User_list_orders from './User_list_orders';
import Profile from './Profile';
import User_menu from './User_menu';

export default class User extends React.Component{

    constructor () {
        super()
        this.state = {
            email:'',
            name:'',
            surname:'',
            user_orders:[],
            page:''
        }
        this.changePage = this.changePage.bind(this)
        this.changeMail = this.changeMail.bind(this)
    }

    componentWillMount () {
        this.setState({page:'profile'})
        Tracker.autorun(()=>{
        var user = Meteor.user()
        if(user){
            var id = user._id
            var email = user.emails[0].address
            var name = user.profile.profile.name
            var surname = user.profile.profile.surname

            this.setState({email:email, name: name, surname: surname}) 
            this.setState({user:user})

            var user_orders = Orders.find({user_id : id}).fetch()
            this.setState({user_orders : user_orders})
            }
        })
    }


     changeMail (email) {
     	debugger
        Meteor.call ('updateEmail', Meteor.userId(), email )
     }

     changePage(data) {
        this.setState({page:data})
     }


        render(){

            let { page } = this.state
            let shown
            if(page == 'profile') {
                    shown = <Profile 
                        name = {this.state.name} 
                        surname = {this.state.surname}
                        email = {this.state.email}
                        changeMail = {this.changeMail}  
                        />
            }
            else if(page == 'orders'){
                    shown = <User_list_orders user_orders={this.state.user_orders}/>
            }


                return(

                	<div>
		   
                        <User_menu changePage={this.changePage}/>

                        <div>

    					   {shown}		

                        </div>
                    </div>
                )
        }
}