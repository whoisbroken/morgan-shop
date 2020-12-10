import React, {Component} from 'react';

import { NavLink } from "react-router-dom";
import "./TopBar.scss";
import Navigation from '../Navigation/Navigation.jsx';


class TopBar extends Component {
  render() {
    return (
      <div className="TopBar">  
        <div className="TopBar_Container Container">
          <div>
            <NavLink to="/">LOGO</NavLink>
          </div>
          <Navigation />
          <div className="TopBar_Icons">
            Icons   
          </div>
        </div>
      </div>
    );
  }
}


export default TopBar;