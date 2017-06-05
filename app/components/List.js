import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';
class List extends React.Component{
    /*constructor(props){
        super(props);
    }
    addNote(note){
        this.state.mang.unshift(note);
        this.setState(this.state);
    }
    handleRemove(index){
        this.state.mang.splice(index,1);
        this.setState(this.state);
    }*/
    showName(){
        var{dispatch} =this.props;
        dispatch({type:'SHOW_NAME'});
    }
    render(){
        return(
            <div>
                <NoteForm />
                {this.props.mang.map((e,key)=>
                    <Note key={key}  index={key}>{e}</Note>
                )}
                <input onClick={this.showName.bind(this)} type="button" value={this.props.name}/>
                <input type="text" value={this.props.name}/>

            </div>
        )
    }
}

module.exports = connect(function (stateofstore) {
    return {mang:stateofstore.mang,name:stateofstore.name}
}) (List);
