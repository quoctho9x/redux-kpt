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
          <div className="columns detail-item">
                  <button className="button btn-back" onClick={this.handleRedirect.bind(this)}> Go back list carts</button>
              <div className="detail-item-content">
                   <div className="columns large-6 ">
                       <img className="img-large" src={this.state.carChoise.media} title="image"/>
                   </div>
                  <div className="columns large-6">
                     {/* <p>{this.state.carChoise.id}</p>*/}
                      <p className="text-large">{this.state.carChoise.model}</p>
                      <p>Company : {this.state.carChoise.make}</p>
                      <p>Name: {this.state.carChoise.name}</p>
                      <p>Price: {this.state.carChoise.price}</p>
                      <p>Year: {this.state.carChoise.year}</p>
                      <button className="button expanded success">Add to card</button>
                  </div>
              </div>
          </div>
          <div className="">
              <p>relate for this car</p>
          </div>

      </div>
    )
  }


}

module.exports =connect(function (state) {
    return {listcarts: state.listcarts};
}) (DetailCart);
