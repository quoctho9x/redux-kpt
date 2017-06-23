import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../redux/action/indexAction';

class Notification extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.txt}</p>
            </div>
        )
    }
    componentDidMount(){
        var {dispatch} = this.props;
        setTimeout(()=>{
            dispatch(Actions.HIDE_NOTIFICATION())
        },3000);
    }
}

module.exports =connect() (Notification);
