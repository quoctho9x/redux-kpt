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

    render() {
        //console.log('item filter');
        return (
            <div>
                <div className="slider-homepage">
                    <ReactSlick/>
                </div>
                <h4 className="title-header">Honda</h4>
               <Itemsfilter mang={this.props.listcarts} filter="Honda"/>
                <h4 className="title-header">BMW</h4>
               <Itemsfilter mang={this.props.listcarts} filter="BMW"/>
                <h4 className="title-header">Mercedes Benz</h4>
               <Itemsfilter mang={this.props.listcarts} filter="Mercedes-Benz"/>
                <h4 className="title-header">Ford</h4>
               <Itemsfilter mang={this.props.listcarts} filter="Ford"/>
            </div>
        )
    }
}

class Itemsfilter extends React.Component {
    constructor(props){
        super(props);
        this.state={listfilter:[]};
    }
    componentDidMount(){
        //case when redirect to homepage. exm: detailitem => homepage
        try{
            this.Fillter(this.props.mang,this.props.filter);
        }catch(e){
            console.log(e)
        }

    }
    componentWillReceiveProps(newProps) {
        //update new state from props
       //console.log('item filter');
        this.Fillter(newProps.mang,newProps.filter);
    }

    Fillter(mang,filter){
        var newArray =  mang.filter(car =>{
            return car.make === filter;
        });
       this.setState({listfilter : newArray});
    }

    render(){
        //console.log(this.props);
        return(
        <div className="row" >
            {
                this.state.listfilter.map((track, key) => {
                    return <div className="small-12 medium-6 large-3 columns items" key={key}>
                        <div className="items-image">
                        <IndexLink to={"/listcarts/"+track.id}  activeClassName="active">
                            <img className="" src={track.media} title="image"/>
                        </IndexLink>
                        </div>
                        <div className="items-content">
                            <p className="items-name">{track.name}</p>
                            <p className="items-info">{track.intro}</p>
                        </div>
                        <div className="items-button">
                            <IndexLink to={"/listcarts/"+track.id}  activeClassName="active" className="primary button">
                                View detail
                            </IndexLink>
                            <button type="button" className="success button">add to cart</button>
                        </div>

                    </div>;})
            }
        </div>
    )}

}

module.exports = connect(function (state) {
    return {listcarts: state.listcarts}
})(HomePage);
