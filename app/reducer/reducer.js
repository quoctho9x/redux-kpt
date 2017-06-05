var redux = require('redux');
import mang from './mang';
import isAdding from './isAdddingReducer';
import name from './showName';

var reducer = redux.combineReducers({
    name : name,
    mang : mang,
    isAdding : isAdding
});

module.exports = reducer
/*
day la cach viet tac cua es 6 khi 2 gia tri bang nhau
var reducer = redux.combineReducers({
    mang , //co
    isAdding
});*/
