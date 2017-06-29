import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as Actions from '../redux/action/indexAction';

class Notification extends React.Component{
    handleRemove() {
        var {dispatch} = this.props;
        dispatch(Actions.HIDE_NOTIFICATION())
    }
    render(){
        return (
            <div className="Notification">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={3000}
                    transitionEnterTimeout={3000}
                    transitionLeaveTimeout={3000}>
                    <button type="button" className="button alert"  onClick={this.handleRemove.bind(this)}>{this.props.txt}</button>
                </ReactCSSTransitionGroup>

            </div>
        )
    }
    componentDidMount(){
        var {dispatch} = this.props;
        setTimeout(()=>{
            dispatch(Actions.HIDE_NOTIFICATION())
        },4000);
    }
}


module.exports =connect() (Notification);
