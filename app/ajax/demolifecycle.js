import React from 'react';
import axios from 'axios';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import * as Actions from '../redux/action/indexAction';
import ReactSlick from './Slider-slick';
class HomePage extends React.Component {
    handleRequest() {
        axios.post('/axios', {username: 'quoctho'})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    getListCarts() {
        var {dispatch} = this.props;
        axios.get('/getdata')
            .then(res => {
                if (res.data !== null) dispatch(Actions.GET_LIST_CARTS(res.data))
            })
            .catch(err => console.log(err));
    }

    getData() {
        var {dispatch} = this.props;
        axios.get('/getdata')
            .then(res => {
                if (res.data !== null) dispatch(Actions.GET_LIST_CARTS(res.data))
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>This is Homepage</h1>
               {/* <ReactSlick/>*/}
               <Itemsfilter mang={this.props.listcarts} filter="Honda"/>
                {/*<table className="table table--custom">
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
                </table>*/}
            </div>
        )
    }

    componentWillMount() {
        this.getData();
    }
}

class Itemsfilter extends React.Component {
    constructor(props){
        super(props);
        this.state={listfilter:[]};

    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
        // this.setState({listfilter : newProps.mang});
        console.log(this.props);
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
        console.log(this.props);
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!');
      this.Fillter(newProps.mang,newProps.filter);
        //this.setState({listfilter : newmang});
    }
      shouldComponentUpdate(newProps, newState) {
     console.log('shouldComponentUpdate');
     console.log(newProps);
     console.log(newState);
     return true;
     }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
        console.log(nextProps);
        console.log(nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!');
        console.log(prevProps);
        console.log(prevState);
    }


    Fillter(mang,filter){
        var newArray =  mang.filter(car =>{
            return car.make === filter;
        });
       this.setState({listfilter : newArray});
    }

    render(){
        console.log('render');
        return(

        <div>
            {
                this.state.listfilter.map((track, key) => {
                    return <div key={key}>
                        <p>{track.id}</p>
                        <p>{track.make}</p>
                        <div>
                            <IndexLink to={"/listcarts/"+track.id}  activeClassName="active">
                                <img className="small-image" src={track.media} title="image"/>
                            </IndexLink>
                        </div>
                    </div>;})
            }
        </div>
    )}


}

module.exports = connect(function (state) {
    return {listcarts: state.listcarts}
})(HomePage);
