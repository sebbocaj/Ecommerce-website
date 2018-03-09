import { Email } from 'meteor/email'
import  { Meteor }  from 'meteor/meteor'

export const  URLC= "smtps://sebastien@barcelonacodeschool.com:Cryogene59@smtp.gmail.com:465/";

Meteor.methods({
  sendEmailClient(to, from, subject, html) {
    // Make sure that all arguments are strings.
    
    check([to, from, subject, html], [String]);

    // Let other method calls from the same client start running, without
    // waiting for the email sending to complete.
    this.unblock();

    Email.send({ to, from, subject, html });
  }
});