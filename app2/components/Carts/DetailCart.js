import React from 'react';
import { hashHistory,browserHistory } from 'react-router';
import {connect} from 'react-redux';
import axios from 'axios';
class DetailCart extends React.Component{
    constructor(props){
        super(props);
        this.state={carChoise:{},text:'1234'};
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    handleRedirect(){
        hashHistory.push('/listcarts');
    }
    componentWillMount() {
        this.props.listcarts.filter(car => {
            if(car.id === this.props.routeParams.id ){
                this.state.carChoise = car;
                this.setState(this.state);
                //this.setState(carChoise = car);
                //console.log(this.state.carChoise);
            }
        });
    }
  render(){

    return (
      <div>
        <h1>This is Detail cart</h1>
        <p>{this.state.carChoise.id}</p>
        <p>{this.state.carChoise.make}</p>
          <img className="small-image" src={this.state.carChoise.media} title="image"/>
        <p>{this.state.carChoise.model}</p>
        <p>{this.state.carChoise.name}</p>
        <p>{this.state.carChoise.price}</p>
        <p>{this.state.carChoise.year}</p>
          <div className="">
              <button className="button" onClick={this.handleRedirect.bind(this)}>Go to Cars</button>
          </div>
      </div>
    )
  }


}

module.exports =connect(function (state) {
    return {listcarts: state.listcarts};
}) (DetailCart);
