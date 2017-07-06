import React from 'react';
import {Link, IndexLink} from 'react-router';
import Searchlists from './search/Searchlists';
import Addtocart from './Cart/Addtocart';
import ScrollTopButton from './nav/ScrollTopButton';

class Nav extends React.Component {

    render() {
        let style ={backgroundImage: `url(http://st2.depositphotos.com/5486388/8033/v/450/depositphotos_80334926-Car-Logo-Template.jpg)`,};
        return (
            <div className="top-bar main-menu">
                <div className="row">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li  className="icon" style={style}><IndexLink to="/" activeClassName="active"/></li>
                            <li>
                                <a href="#">One</a>
                                <ul className="menu vertical">
                                    <li><a href="#">One</a></li>
                                    <li><a href="#">Two</a></li>
                                    <li><a href="#">Three</a></li>
                                </ul>
                            </li>
                            <li><Link to="/account" activeClassName="active">Accout</Link></li>
                            <li><Link to="/listcarts" activeClassName="active">List carts</Link></li>
                            <li><Link to="/introduction" activeClassName="active">About Me</Link></li>
                            <li><Link to="/Contact" activeClassName="active">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">

                        <ul className="menu">
                            <li><Addtocart/></li>
                            <li><Searchlists/></li>
                            <li>
                                <button type="button" className="button">Search</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <ScrollTopButton/>
            </div>
        )
    }
}

module.exports = Nav;
