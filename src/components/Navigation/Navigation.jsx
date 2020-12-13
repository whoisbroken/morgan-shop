import React from 'react';
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
  return (
      <nav className="Nav">
        <ul className="Nav_List">
          <li className="Nav_Item">
            <NavLink 
              className="Nav_Link" 
              to="/interior-ceiling"
              activeClassName="Nav_Link_active"
            >
            Interior ceiling</NavLink>
          </li>
          <li className="Nav_Item">
            <NavLink 
              className="Nav_Link" 
              to="/floor-lamps"
              activeClassName="Nav_Link_active"

            >Floor lamps</NavLink>
          </li>
          <li className="Nav_Item">
            <NavLink 
              className="Nav_Link" 
              to="/exterior-ceiling"
              activeClassName="Nav_Link_active"

            >
            Exterior ceilings</NavLink>
          </li>
          <li className="Nav_Item">
            <NavLink 
              className="Nav_Link" 
              to="/table-lamps"
              activeClassName="Nav_Link_active"

            >
            Table lamps</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;