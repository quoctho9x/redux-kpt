import React from 'react';
import { hashHistory,browserHistory } from 'react-router';
import {connect} from 'react-redux';
import axios from 'axios';
//day la bien duoc luu vao localstorage
var carts = (JSON.parse(localStorage.getItem('carts'))!== null) ? JSON.parse(localStorage.getItem('carts')):[];

class DetailItem extends React.Component{
    constructor(props){
        super(props);
        this.state={carChoise:{},text:'1234'};
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    handleRedirect(){
        hashHistory.push('/listcarts');
    }

    handleAddtocart(id,name,price,count){

        //var carts = {id:id,name:name,price:price,count:count};
        var cart = {'id':id,'name':name,'price':price,'count':count};
        carts.push(cart);
        localStorage.setItem('carts',JSON.stringify(carts));
        document.getElementById('result').innerHTML = localStorage.getItem('carts').toString();
        console.log(JSON.parse(localStorage.getItem('carts')));
    }
    componentDidMount(){
        document.getElementById('result').innerHTML =(localStorage.getItem('carts')!== null) ? localStorage.getItem('carts').toString() : 'khong co gia tri';
    }
    componentWillReceiveProps(){
        //update component when routerparams.id change
        //console.log(this.props.routeParams.id);
        this.props.listcarts.filter(car => {
            if(car.id === this.props.routeParams.id ){
                this.state.carChoise = car;
                this.setState(this.state);
            }
        });
    }
    componentWillMount() {
        this.props.listcarts.filter(car => {
            if(car.id === this.props.routeParams.id ){
                this.state.carChoise = car;
                this.setState(this.state);
            }
        });
    }
  render(){

    return (
      <div>
          <p id="result"/>
          <span className="fa fa-shopping-cart" aria-hidden="true"/><span className="badge primary">1</span>
          <div className="columns detail-item">
                  <button className="button btn-back" onClick={this.handleRedirect.bind(this)}> Go back list carts</button>
              <div className="detail-item-content">
                   <div className="columns large-6 ">
                       <img className="img-large" src={this.state.carChoise.media} title="image"/>
                   </div>
                  <div className="columns large-6">
                     {/* <p>{this.state.carChoise.id}</p>*/}
                      <p className="text-large">{this.state.carChoise.name}</p>
                      <p>Company : {this.state.carChoise.make}</p>
                      <p>Name: {this.state.carChoise.model}</p>
                      <p>Price: {this.state.carChoise.price}</p>
                      <p>Year: {this.state.carChoise.year}</p>
                      {/*call function in es6*/}
                      <button className="button expanded success" onClick={()=>this.handleAddtocart(this.state.carChoise.id,this.state.carChoise.name,this.state.carChoise.price,'1')}>Add to card</button>
                      {/*call function in es5*/}
                      {/*<button className="button expanded success" onClick={this.handleAddtocart.bind(this,this.state.carChoise.id,this.state.carChoise.name,this.state.carChoise.price,'1')}>Add to card</button>*/}
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
}) (DetailItem);
