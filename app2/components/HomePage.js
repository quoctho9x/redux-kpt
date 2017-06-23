import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as Actions from '../redux/action/indexAction';
import ReactSlick from './Slider-slick';
class HomePage extends React.Component{
    handleRequest(){
        axios.post('/axios',{username:'quoctho'})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

    }
    getListCarts(){
        var{dispatch} = this.props;
        axios.get('/getdata')
            .then(res => {
                if(res.data !== null) dispatch(Actions.GET_LIST_CARTS(res.data))
            })
            .catch(err => console.log(err));
    }
    getData(){
        axios.get('/getdata')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
  render(){
    return (
      <div>
        <h1>This is Homepage</h1>
         <ReactSlick/>
        <button className="button" onClick={this.getData.bind(this)}>request</button>
      </div>
    )
  }
  componentDidMount(){
     // this.getListCarts();
     // console.log('da lay duoc data')
  }
}

module.exports = connect() (HomePage);
