import { Meteor } from 'meteor/meteor'
import { Orders } from '../../imports/api/Orders'

Meteor.methods({
    createOrder: function (name, surname, adress, email, order_products, total, user_id) {
        Orders.insert({ name, surname, adress, email, order_products, total, user_id})
      }
    })