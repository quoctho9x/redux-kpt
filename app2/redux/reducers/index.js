var redux = require('redux');
import authen from './authen';


var reducer = redux.combineReducers({authen});

//xuat store ra o day luon
var store = redux.createStore(reducer);

export {store};
//console.log(store);