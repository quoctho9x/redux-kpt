import React from 'react';
import {hashHistory, browserHistory,IndexLink} from 'react-router';
import {connect} from 'react-redux';
import axios from 'axios';
import * as Actions from '../../redux/action/indexAction'

class Addtocart extends React.Component {
    constructor(props){
        super(props);
        this.state={addtocart:[]}
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
    }
    componentWillReceiveProps(newprops){
        this.state.addtocart = newprops.addtocart;
        this.setState(this.state);
    }
    render() {
        return (
            <div>
                <div className="add-to-cart">
                    <span className="fa fa-2 fa-shopping-cart" aria-hidden="true"> Shoping Cart</span> <span
                    className="badge primary">{this.props.addtocart.length}</span>
                    <ul className="add-to-cart-info">
                        {
                            this.props.addtocart.map((cart, key) => {
                                return <li className="" key={key}>
                                    <span className="add-to-cart-remove" title="Remove this item" onClick={() => this.removeItem(cart.id)}>×</span>
                                    <IndexLink to={"/listcarts/"+cart.id}  activeClassName="active">
                                        {cart.name}
                                    </IndexLink>
                                    <img className="add-to-cart-image" src={cart.media} alt="hinh"/>
                                    <p className="add-to-cart-price-count"><span>{cart.count}</span> x
                                        <span>{cart.price}</span></p>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }


}

module.exports = connect(function (state) {
    return {addtocart: state.addtocart}
})(Addtocart);
