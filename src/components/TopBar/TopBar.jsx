import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import "./TopBar.scss";
import Navigation from '../Navigation/Navigation.jsx';
import TopBarIcons from '../TopBarIcons/TopBarIcons.jsx';
import Logo from '../../images/Logo.svg'

class TopBar extends Component {
  render() {
    return (
      <div className="TopBar">
        <div className="TopBar_Container Container">
          <div className="TopBar_BurgerMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <NavLink className="TopBar_Link" to="/">
            <img className="TopBar_Logo" src={Logo} alt="Logo" />
          </NavLink>
          <Navigation />
          <TopBarIcons />
        </div>
      </div>
    );
  }
}

export default TopBar;