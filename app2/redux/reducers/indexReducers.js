var redux = require('redux');
import authen from './authen';
import notification from './notification';
import listcarts from './listcarts';


var reducer = redux.combineReducers({authen,notification,listcarts});

//xuat store ra o day luon
var store = redux.createStore(reducer);

export {store};
//console.log(store);