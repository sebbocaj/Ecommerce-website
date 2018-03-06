
import  { Meteor }  from 'meteor/meteor'
var Stripe = StripeAPI('sk_test_rjTu6ENV2aaIUKyAzVAMbDcR');

var Future = Npm.require('fibers/future');

var charge = (token, amount)=>{

  var future = new Future;
  Stripe.charges.create({
      source: token.id,
      amount: amount,
      currency: 'eur',
      receipt_email: 'sebastien@barcelonacodeschool.com'
  },(error,results)=>{
    if(error) {
      future.return(error)
    }else if(results) {
      console.log("stripe charges ok")
      future.return(results)
    }
  })
    return future.wait();
}

Meteor.methods({
  StripeChargeMethod: function(token, amount){
  	console.log("stripe method ok")
    try{
      var data = charge(token, amount)
      console.log('***********************success***********************?')
      return data
    }catch(error){
      console.log('***********************error***********************?')
      return error
    }
  }
})