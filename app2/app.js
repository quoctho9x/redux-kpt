var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory,browserHistory} = require('react-router');
var redux = require('redux');
var {store} = require('./redux/reducers/indexReducers');
var {Provider} = require('react-redux');
import axios from 'axios';
import * as Actions from './redux/action/indexAction';

var HomePage = require('./components/HomePage');
var Account = require('./components/Account');
var Listcarts = require('./components/Listcarts');
var DetailItem = require('./components/Items/DetailItem');
var Main = require('./components/Main');
var Contact = require('./components/Contact/Contact');
var Introduction = require('./components/intro/Introduction');


var requireLogin = (nextState,replace,next)=>{
    if(store.getState().authen === null){
        replace('/');
        console.log(store);
        console.log('chua login ve homepage');
    }
    next();
};
//lay du lieu tu file json
function getData() {
    var {dispatch} = store;
    axios.get('/getdata')
        .then(res => {
            if (res.data !== null) dispatch(Actions.GET_LIST_CARTS(res.data))
        })
        .catch(err => console.log(err));
}
//require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!sass-loader!./css/styles.scss');
//require('style-loader!css-loader!sass-loader!./css/slick.scss');

$(document).ready(()=> $(document).foundation());
getData();
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Router path="/" component={Main}>
                <IndexRoute component={HomePage}/>
                <Route path="account" component={Account}/>
                <Route path="listcarts" component={Listcarts} onEnter={requireLogin} />
                <Route path='/listcarts/:id' component={DetailItem}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/introduction' component={Introduction}/>
            </Router>
        </Router>
    </Provider>,
  document.getElementById('root')
);
