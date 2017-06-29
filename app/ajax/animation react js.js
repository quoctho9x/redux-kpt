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

            <div className="Notification" onClick={this.handleRemove.bind(this)} >
                <TodoList/>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={3000}
                    transitionEnterTimeout={5000}
                    transitionLeaveTimeout={5000}>
                    <span className="label alert">{this.props.txt}</span>
                </ReactCSSTransitionGroup>

            </div>
        )
    }
    componentDidMount(){
        var {dispatch} = this.props;
        setTimeout(()=>{
            dispatch(Actions.HIDE_NOTIFICATION())
        },5000);
    }
}
var TodoList = React.createClass({
    getInitialState: function() {
        return {items: ['hello', 'world', 'click', 'me']};
    },
    handleAdd: function() {
        var newItems =
            this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    },
    handleRemove: function(i) {
        var newItems = this.state.items;
        newItems.splice(i, 1);
        this.setState({items: newItems});
    },
    render: function() {
        var items = this.state.items.map(function(item, i) {
            return (
                <h2 className="todo-item" key={item} onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </h2>
            );
        }.bind(this));
        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={3000}
                                         transitionEnterTimeout={5000}
                                         transitionLeaveTimeout={5000}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports =connect() (Notification);
