import {Accounts}       from 'meteor/accounts-base'
import { Meteor }       from 'meteor/meteor'

Meteor.methods({
    createUserInServer: function (email, password, profile) {
          Accounts.createUser({ email, password, profile})
    },

    updateEmail: function (id, email) {
    	Meteor.users.update({
        _id: id
     	}, 
     	{
        $set: {
            'emails.0.address': email,    
        }
    });
    }

})

    