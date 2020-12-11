import React from 'react';
import { NavLink } from "react-router-dom";

import SearchIcon from '../../images/ic_search.svg'
import LoginIcon from '../../images/ic_login.svg'
import CartIcon from '../../images/ic_cart.svg'

const TopBarIcons = () => {
  return (
    <div className="TopBar_Icons">
      <NavLink className="TopBar_Icon" to="/qwe">
        <img src={SearchIcon} alt="Search" />
      </NavLink>
      <NavLink className="TopBar_Icon" to="/login">
        <img src={LoginIcon} alt="Login" />
      </NavLink>
      <NavLink className="TopBar_Icon" to="/cart">
        <img src={CartIcon} alt="Cart" />
        <p className="TopBar_Counter">0</p>
      </NavLink>
    </div>
  );
};

export default TopBarIcons;