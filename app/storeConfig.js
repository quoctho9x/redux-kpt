import React from 'react';
import ReactDOM from 'react-dom';
//import redux from 'redux';
var redux = require('redux');
import reducer from './reducer/reducer';

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension():f => f
));

/*
store.dispatch({type:'TOGGLE_IS_ADDING'});

store.dispatch({type:'ADD_ITEM',item:'Unity'});

store.dispatch({type:'REMOVE_ITEM',index:'1'});*/

module.exports = store;