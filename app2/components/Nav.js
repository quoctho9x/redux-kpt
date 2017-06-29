import React from 'react';
import {Link,IndexLink} from 'react-router';
import Searchlists from './search/Searchlists';
class Nav extends React.Component{
  render(){
    return (
        <div className="top-bar main-menu">
            <div className="row">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">{/*<img className="icon" src="./images/icon.png" alt="img"/>*/}Logo</li>
                        <li>
                            <a href="#">One</a>
                            <ul className="menu vertical">
                                <li><a href="#">One</a></li>
                                <li><a href="#">Two</a></li>
                                <li><a href="#">Three</a></li>
                            </ul>
                        </li>
                        <li><IndexLink to="/" activeClassName="active">Homepage</IndexLink></li>
                        <li><Link to="/account" activeClassName="active">Accout</Link></li>
                        <li><Link to="/listcarts" activeClassName="active">List carts</Link></li>
                        <li><Link to="/introduction" activeClassName="active">About Me</Link></li>

                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><Searchlists/></li>
                        <li><button type="button" className="button">Search</button></li>
                    </ul>
                </div>
            </div>

        </div>
    )
  }
}

module.exports = Nav;
