import React from 'react';
import {connect} from  'react-redux';
import * as Actions from '../redux/action/indexAction';
import axios from  'axios';
class AccountInfo extends React.Component{
    logOut(e){
        e.preventDefault();
       var{dispatch} = this.props;

        axios.get('/logout')
            .then(res =>{
                dispatch(Actions.LOG_OUT());
            })
            .catch(err => console.log(err))
    }
    render(){
        return (
            <div>
                <h1>This is AccountInfo</h1>
                <p>Username: {this.props.username}</p>
                <a href="#" onClick={this.logOut.bind(this)}>log out</a>
            </div>
        )
    }
}
module.exports = connect(function(state){
    return{username:state.authen};
}) (AccountInfo);

