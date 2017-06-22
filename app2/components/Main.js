import React from 'react';
import Nav from './Nav';
import axios from 'axios';
import {connect} from 'react-redux';
import Notification from './Notification';
class Main extends React.Component{
  render(){
      var {notification} =this.props;
      //thong bao khi dang nhap khong dung
      var xhtml = notification !== null? <Notification txt={notification}/>: null;
     // console.log(this.props);
    return (
      <div className="row">
        <Nav/>
        {xhtml}
        {this.props.children}
      </div>
    )
  }
  componentDidMount(){
      var {dispatch} = this.props;
      axios.get('/getInfo')
          .then(res =>{
              //console.log(res.data)
              if(res.data !== 'CHUA_DANG_NHAP'){
                  dispatch({type:'LOG_IN',username:res.data});
              }else { console.log(res.data);}

          })
          .catch(err => console.log(err))
  }
}

module.exports = connect(function(state){
    return {notification :state.notification}
}) (Main);
