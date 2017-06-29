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
        //console.log(this.props);
        var imgUrl = "http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png";
        const  style ={
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundPosition:'center',
            backgroundSize:'100%',
            backgroundRepeat:'no-repeat',
            margin:'15px auto',
            width:'200px',
            height:'200px',
            borderRadius:'50%',
        };
        return (
            <div>
                <div className="info-user">
                    <div className="user-avatar" style={style}></div>
                    <h3>{this.props.username}</h3>
                    <p>Your Position</p>
                    <p>Your Company</p>
                    <p>Your City, Your State</p>
                    <p>
                        <a href="https://www.google.com.vn">you@somedomain.com</a>
                    </p>
                    <p>Your Short Bio goes here.</p>
                    <div className="info-user-link">
                        <button type="button" className="button warning">Gmail</button>
                        <button type="button" className="button success">Facebook</button>
                        <button type="button" className="button primary">LinkedIn</button>
                        <button type="button" className="button alert">Outlook</button>
                    </div>
                </div>
                <a href="#" onClick={this.logOut.bind(this)}>log out</a>
            </div>
        )
    }
}
module.exports = connect(function(state){
    return{username:state.authen};
}) (AccountInfo);

