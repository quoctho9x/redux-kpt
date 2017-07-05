import React from 'react';
import {hashHistory, browserHistory,IndexLink} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from 'react-redux';
import axios from 'axios';
import * as Actions from '../../redux/action/indexAction'

class Addtocart extends React.Component {
    constructor(props){
        super(props);
        this.state={addtocart:[],prire:{count: 0,total_price:0},activeSlide: 0}
    }
    removeItem(id){
        var {dispatch} = this.props;
       /* console.log(id);
        console.log(this.state.addtocart);
*/
        this.state.addtocart = this.props.addtocart.filter((item)=> {
            return item.id !== id;
        });
        localStorage.setItem('carts',JSON.stringify(this.state.addtocart));
        dispatch(Actions.ADD_TO_CARTS(JSON.parse(localStorage.getItem('carts'))));
       // console.log( this.state.addtocart);
    }
    updatePriceTotal(){
        var total_count = 0;
        var total_price = 0;
        this.state.addtocart.map((item)=>{
            total_count += item.count;
            total_price += item.count * parseFloat(item.price);
        });
        this.state.prire = {count:total_count,total_price: parseFloat(total_price).toFixed(3)};
        window.setTimeout(() => {
            this.setState({
                activeSlide: this.state.activeSlide + 1
            });
        }, 0);
        this.setState(this.state);
    }
    getBackgroundColor() {
        let red = this.getRandomColorValue();
        let green = this.getRandomColorValue();
        let blue = this.getRandomColorValue();

        return `rgb(${red}, ${green}, ${blue})`;
    }

    getRandomColorValue() {
        return Math.floor(Math.random() * 255);
    }

    componentDidMount() {
        //check update store
        var {dispatch} = this.props;
        if (JSON.parse(localStorage.getItem('carts')) !== null) {
            dispatch(Actions.ADD_TO_CARTS(JSON.parse(localStorage.getItem('carts'))));
        } else {
            console.log('chua co add gio hang')
        }
        this.state.addtocart = this.props.addtocart;
        this.setState(this.state);

        /*window.setInterval(() => {
            this.setState({
                activeSlide: this.state.activeSlide + 1
            });
        }, 1500);*/
    }
    componentWillReceiveProps(newprops){
        this.state.addtocart = newprops.addtocart;
        this.updatePriceTotal();
        this.setState(this.state);
    }
    render() {
        let style = {backgroundColor: this.getBackgroundColor()};
        return (
            <div>
                <div className="add-to-cart">
                    <span className="fa fa-2 fa-shopping-cart" aria-hidden="true"> Shoping Cart</span> <span
                    className="badge primary">{this.state.prire.count} </span>
                    <div className="add-to-cart-info">
                        <ul >
                            {
                                this.props.addtocart.map((cart, key) => {
                                    return <li className="" key={key}>
                                        <span className="add-to-cart-remove" title="Remove this item" onClick={() => this.removeItem(cart.id)}>×</span>
                                        <IndexLink to={"/listcarts/"+cart.id}  activeClassName="active">
                                            {cart.name}
                                        </IndexLink>
                                        <img className="add-to-cart-image" src={cart.media} alt="hinh"/>
                                        <p className="add-to-cart-price-count"><span>{cart.count}</span> x <span>{cart.price}</span></p>
                                    </li>
                                })
                            }
                        </ul>
                        <div className="total-price">
                            <ReactCSSTransitionGroup

                                transitionEnterTimeout={100}//thoi gian ma the p co class la enter va enter-active ton tai
                                transitionLeave={false}
                                transitionName="slide">
                                <p className="slide" key={this.state.activeSlide}  style={style}>
                                    TOTAL: {this.state.prire.total_price}
                                </p>
                            </ReactCSSTransitionGroup>
                            <input className="submit button alert btn-custom" type="button" id="submit" value="Checkout"/>
                            <input className="submit button alert btn-custom" type="button" id="submit" value="View list"/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


}

module.exports = connect(function (state) {
    return {addtocart: state.addtocart}
})(Addtocart);
