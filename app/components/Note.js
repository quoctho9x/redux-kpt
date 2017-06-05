import React from 'react';
import {connect} from 'react-redux';
class Note extends React.Component{
    removeNote(){
        //var {index, handleRemove} = this.props;
        //handleRemove(index);
        var {dispatch,index} = this.props;
        dispatch({type:'REMOVE_ITEM',index});
        //trong es6 ten thuoc tinh bang ten bien (index = index) co the viet la (index) thoi
    }
    render(){
        return(
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.removeNote.bind(this)}>Delete</button>
            </div>
        )
    }
}

module.exports =connect() (Note);
