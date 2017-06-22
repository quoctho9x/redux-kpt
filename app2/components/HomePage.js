import React from 'react';
import axios from 'axios';
import ReactSlick from './Slider-slick';
class HomePage extends React.Component{
    handleRequest(){
        axios.post('/axios',{username:'quoctho'})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

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
}

module.exports = HomePage;
