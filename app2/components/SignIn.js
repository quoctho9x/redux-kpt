import React from 'react';
import {connect} from  'react-redux';
import * as Actions from '../redux/action/indexAction';
import axios from 'axios';

class SignIn extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var {username,password} = this.refs;

       axios.post('/signIn',{username:username.value,password:password.value})
           .then(res =>{
               if(res.data === 'DANG_NHAP_THANH_CONG'){
                   dispatch(Actions.LOG_IN(username.value))
               }else {
                   dispatch(Actions.SHOW_NOTIFICATION('Pleass check USERNAME AND PASSWORD again!'))
               }
           })
           .catch(err => console.log(err))
    }
    render(){
        return (
            <div>
                <h1 className="text-center page-title">Sign In</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Username" ref='username'/>
                    <input type="password" placeholder="Password" ref='password'/>
                    <button type="submit" className="button expanded">Sign In</button>
                </form>
            </div>
        )
    }
}
module.exports = connect() (SignIn);


