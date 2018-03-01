
export const Cart = new Meteor.Collection(null);

var BudgetCartObserver = new LocalPersist(Cart, 'budget-Cart');


