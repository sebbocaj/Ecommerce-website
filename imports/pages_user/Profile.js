import React from 'react'



export default class Profile extends React.Component{

    constructor () {
        super()
        this.state = {
            email:''
        }
    }

    componentWillMount () {
    this.setState({email : this.props.email})
}

    handleChange(e) {
        this.setState({email: e.target.value})
    }


    changeMail () {
        this.props.changeMail (this.state.email)
     }



    

        render(){

                return(
                <div>
                    <h1>My profile</h1>
                    <div className="profile">
                            <p>Name : {this.props.name}</p>
                            <p>Surname : {this.props.surname}</p>
                            <p>E-mail : <input onChange={this.handleChange.bind(this)} value={this.state.email}/> 
                                <button onClick={this.changeMail.bind(this)}>Modify</button></p>

                    </div>

                    

                </div>
                )
        }
}