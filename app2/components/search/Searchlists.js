import React from 'react';
import axios from 'axios';
import {connect} from  'react-redux';
import * as Actions from '../../redux/action/indexAction';
import {Link, IndexLink} from 'react-router';
class Searchlists extends React.Component{
  constructor(props){
      super(props);
      this.state={searchString:'',cars: []};
      this.componentWillMount = this.componentWillMount.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
  }
  getData() {
      var {dispatch} = this.props;
      axios.get('/getdata')
          .then(res => {
              if (res.data !== null) dispatch(Actions.GET_LIST_CARTS(res.data))
          })
          .catch(err => console.log(err));
  }

  componentWillMount() {
      this.getData();
      //set data from props to state
      this.state.cars = this.props.listcarts;
      this.setState(this.state);
  }
  componentDidMount(){
     var input = document.getElementById('my-search');
     var result = document.getElementsByClassName('search-result')[0];
     input.addEventListener('focus',function () {
     result.style.display ='block';
     });
     input.addEventListener('focusout',function () {
         setTimeout(function () {
             result.style.display ='none';
         },200);
     });
  }
  handleChange(e){
    this.setState({searchString:e.target.value})
  }
  render(){
    //lay chuoi search
    var searchStr = this.state.searchString.trim().toLowerCase();
    // filter through cars and return linked cars
    if(searchStr.length>0){
      this.state.cars = this.props.listcarts.filter(function (list) {
          return list.name.toLowerCase().match(searchStr);
      })
    }else {
      this.state.cars =this.props.listcarts;
    }


    return (
      <div className="form-search">
        <input type="text" id="my-search" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="search list"/>
        <div className="search-result">
          {
            this.state.cars.map((track, key) => {
              return <IndexLink className="items-name" key={key} to={"/listcarts/"+track.id}>
                  {/* <img className="small-image" src={track.media} title="image"/>*/}
                  {track.name}
              </IndexLink>;})
          }
        </div>

      </div>
    )
  }
}

module.exports = connect(function(state){
  return{listcarts:state.listcarts};
}) (Searchlists);
