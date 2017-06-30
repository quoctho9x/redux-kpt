import React from 'react';
import Addtocart from '../Cart/Addtocart';
import { hashHistory,browserHistory } from 'react-router';
import {connect} from 'react-redux';
import * as Actions from '../../redux/action/indexAction'

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
    addcarttostore(list_carts){
        var {dispatch} = this.props;
        dispatch(Actions.ADD_TO_CARTS(list_carts));
    }

    handleAddtocart(id,name,price,count,media){
        carts = (JSON.parse(localStorage.getItem('carts'))!== null) ? JSON.parse(localStorage.getItem('carts')):[];
        console.log(carts);
        var cart = {'id':id,'name':name,'price':price,'count':count,'media':media};
        carts.push(cart);
        localStorage.setItem('carts',JSON.stringify(carts));
        //update gio hang when add to cart
        this.addcarttostore(JSON.parse(localStorage.getItem('carts')));
        /*
        console.log('update khi click');
        console.log(JSON.parse(localStorage.getItem('carts')));*/
    }
    componentDidMount(){
        if(JSON.parse(localStorage.getItem('carts')) !== null){
            this.addcarttostore(JSON.parse(localStorage.getItem('carts')));
        }else {console.log('chua co add gio hang')}
    }
    componentWillReceiveProps(newprops){
        //update component when routerparams.id change
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
      /*console.log('update khi load xong');
      console.log(this.props.addtocart);
      console.log(this.props.addtocart.length);*/
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
                      <p className="text-large">{this.state.carChoise.name}</p>
                      <p>Company : {this.state.carChoise.make}</p>
                      <p>Name: {this.state.carChoise.model}</p>
                      <p>Price: {this.state.carChoise.price}</p>
                      <p>Year: {this.state.carChoise.year}</p>
                      {/*call function in es6*/}
                      <button className="button expanded success" onClick={()=>this.handleAddtocart(this.state.carChoise.id,this.state.carChoise.name,this.state.carChoise.price,'1',this.state.carChoise.media)}>Add to card</button>
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
    return {listcarts: state.listcarts, addtocart:state.addtocart};
}) (DetailItem);
