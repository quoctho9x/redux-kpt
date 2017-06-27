var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory,browserHistory} = require('react-router');
var redux = require('redux');
var {store} = require('./redux/reducers/indexReducers');
var {Provider} = require('react-redux');

var HomePage = require('./components/HomePage');
var Account = require('./components/Account');
var Listcarts = require('./components/Listcarts');
var DetailItem = require('./components/Items/DetailItem');
var Main = require('./components/Main');
var Introduction = require('./components/intro/Introduction');


var requireLogin = (nextState,replace,next)=>{
    if(store.getState().authen === null){
        replace('/');
        console.log('chua login ve homepage');
    }
    next();
};

//require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!sass-loader!./css/styles.scss');
//require('style-loader!css-loader!sass-loader!./css/slick.scss');
$(document).ready(()=> $(document).foundation());
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Router path="/" component={Main}>
                <IndexRoute component={HomePage}/>
                <Route path="account" component={Account}/>
                <Route path="listcarts" component={Listcarts} onEnter={requireLogin} />
                <Route path='/listcarts/:id' component={DetailItem} onEnter={requireLogin}/>
                <Route path='/introduction' component={Introduction}/>
            </Router>
        </Router>
    </Provider>,
  document.getElementById('root')
);
