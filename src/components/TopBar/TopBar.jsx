import React, { Component } from 'react';

import "./TopBar.scss";
import Navigtion from '../Navigtion/Navigtion';

class TopBar extends Component {
  render() {
    return (
      <div className="TopBar">  
        <div className="TopBar_Container Container">
          <img className="TopBar_Logo" src="../../images/Logo.svg" alt="Logo"/>
          <Navigtion />
          <div className="TopBar_Icons">Icons</div>
        </div>
      </div>
    );
  }
}

export default TopBar;