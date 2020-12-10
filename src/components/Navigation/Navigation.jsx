import React from 'react';
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
  return (
      <nav className="Nav">
        <ul className="Nav_List">
          <li className="Nav_Item">
            <NavLink className="Nav_Link" to="/interior-ceiling">Interior ceiling</NavLink>
          </li>
          <li className="Nav_Item">
            <NavLink className="Nav_Link" to="/floor-lamps">Floor lamps</NavLink>
          </li>
          <li className="Nav_Item">
            <NavLink className="Nav_Link" to="/exterior-ceiling">Exterior ceilings</NavLink>
          </li>
          <li className="Nav_Item">
            <NavLink className="Nav_Link" to="/table-lamps">Table lamps</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;