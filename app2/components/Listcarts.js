import React from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import axios from 'axios';
class Listcarts extends React.Component{

    getData(){
    var{dispatch} = this.props;
        axios.get('/getdata')
            .then(res => {
                if(res.data !== null) dispatch({type:'GET_LIST_CARTS',lists:res.data})
               })
            .catch(err => console.log(err));
    }
  render(){
    return (
      <div>
        <h1>This is List Carts</h1>
        <table className="table table--custom">
          <thead>
          <tr className="table--th--custom">
            <th>ID</th>
            <th>make</th>
            <th>media</th>
            <th>name</th>
            <th>price</th>
            <th>year</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.listcarts.map((track, key) => {
                  return <tr key={key}>
                    <td>{track.id}</td>
                    <td>{track.make}</td>
                    <td>
                        <IndexLink to={"/listcarts/"+track.id}  activeClassName="active">
                            <img className="small-image" src={track.media} title="image"/>
                        </IndexLink>
                    </td>
                    <td>{track.name}</td>
                    <td>{track.price}</td>
                    <td>{track.year}</td>
                  </tr>;})
          }
          </tbody>
        </table>
      </div>
    )
  }
    componentWillMount(){
        this.getData();
    }
}

module.exports =connect(function (state) {
    return {listcarts: state.listcarts};
}) (Listcarts);
