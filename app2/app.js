var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory,browserHistory} = require('react-router');

var redux = require('redux');
var {Provider} = require('react-redux');


var username = (state = null,action) =>{
    switch (action.type){
        case "LOG_IN":
            return action.username;
        case "LOG_OUT":
            return null;
        default:
            return state;
    }
    return state;
}

var notification = (state = null,action) =>{
    switch (action.type){
        case "SHOW_NOTIFICATION":
            return action.txt;
        case "HIDE_NOTIFICATION":
            return null;
        default:
            return state;
    }
    return state;
}

var listcarts = (state = [],action) =>{
    switch (action.type){
        case "GET_LIST_CARTS":
            //console.log(action.lists);
            const {lists} = action;
            return [...lists];
        default:
            return state;
    }
    return state;
}

var reducer = redux.combineReducers({username,notification,listcarts});
var store =redux.createStore(reducer);

var HomePage = require('./components/HomePage');
var Account = require('./components/Account');
var Listcarts = require('./components/Listcarts');
var DetailCart = require('./components/Carts/DetailCart');
var Main = require('./components/Main');
var requireLogin = (nextState,replace,next)=>{
    if(store.getState().username === null){
        replace('/');
    }
    next();
};

//require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!sass-loader!./css/styles.scss');
require('style-loader!css-loader!sass-loader!./css/slick.scss');
$(document).ready(()=> $(document).foundation());
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Router path="/" component={Main}>
                <IndexRoute component={HomePage}/>
                <Route path="account" component={Account}/>
                <Route path="listcarts" component={Listcarts} onEnter={requireLogin} />
                <Route path='/listcarts/:id' component={DetailCart}/>
            </Router>
        </Router>
    </Provider>,
  document.getElementById('root')
);
