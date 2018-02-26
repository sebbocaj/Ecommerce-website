import React from 'react'

export default class Profile extends React.Component{


        render(){

                return(
                <div>
                    <h1>Profile</h1>
                    <div className="profile">
                            <p>Name : aaaaaaaaa</p>
                            <p>Surname : bbbbbbbbb</p>
                            <p>E-mail : me@gmail.com <span><u>Modify</u></span></p>
                            <p>Password : ******* <span><u>Modify</u></span></p>

                    </div>
                </div>
                )
        }
}