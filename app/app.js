import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
// var bien = require('./examples');
//require('./storeConfig');
import store from './storeConfig';
//them thu vien react redux de component co the lay state tu redux
import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <List/>
    </Provider>,
  document.getElementById('root')
);

