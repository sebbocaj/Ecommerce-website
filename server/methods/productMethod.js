import { Meteor } from 'meteor/meteor'
import { Products  } from '../../imports/api/Products'

Meteor.methods({
    createProduct: function (title, description, category, price, stock, photo) {
        Products.insert({ title, description, category, price, stock, photo})
      },

    removeProduct: function (id) {
    	Products.remove({_id : id})
      },

    updateProduct: function (id, title, description, category, price, stock, photo) {
      Products.update({_id: id},{$set: {title, description, category, price, stock, photo}})
      },

    updateStock : function (id, quantity) {
    Products.update({_id : id},{$inc: {stock: - quantity}})
      }

    })