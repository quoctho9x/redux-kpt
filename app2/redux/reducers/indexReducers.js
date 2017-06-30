var redux = require('redux');
import authen from './authen';
import notification from './notification';
import listcarts from './listcarts';
import addtocart from './addtocart';


var reducer = redux.combineReducers({authen,notification,listcarts,addtocart});

//xuat store ra o day luon
var store = redux.createStore(reducer);

export {store};
//console.log(store);