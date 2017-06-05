import React from 'react';
import {connect} from 'react-redux';

class NoteForm extends React.Component{
    constructor(props){
        super(props);
    }
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch({type:'ADD_ITEM',item:this.refs.txt.value});
        dispatch({type:'TOGGLE_IS_ADDING'});
    }
    toggle(){
        var {dispatch} = this.props;
        dispatch({type:'TOGGLE_IS_ADDING'});
    }
    render(){
        if(this.props.isAdding)
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Enter your text" ref="txt"/>
                <br/><br/>
                <button>Add</button>
            </form>
        )
        //else
        return(
            <button onClick={this.toggle.bind(this)}>+</button>
        )
    }
}

module.exports = connect(function (state) {
    return{isAdding:state.isAdding}
})(NoteForm);
