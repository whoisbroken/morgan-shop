import React from 'react';
import { NavLink } from "react-router-dom";

import "./TopBarIcons.scss";
import SearchIcon from '../../images/ic_search.svg'
import LoginIcon from '../../images/ic_login.svg'
import CartIcon from '../../images/ic_cart.svg'

const TopBarIcons = () => {
  return (
    <div className="TopBarIcons">
      <button className='TopBarIcons_Button'>
        <img className='TopBarIcons_Icon' src={SearchIcon} alt='search' />
      </button>
      <NavLink className="TopBarIcons_Link" to="/login" 
              activeClassName="TopBarIcons_Link_active">
        <img src={LoginIcon} alt="Login" />
      </NavLink>
      <NavLink className="TopBarIcons_Link" to="/cart" 
              activeClassName="TopBarIcons_Link_active">
        <img src={CartIcon} alt="Cart" />
        <p className="TopBarIcons_Counter">0</p>
      </NavLink>
    </div>
  );
};

export default TopBarIcons;