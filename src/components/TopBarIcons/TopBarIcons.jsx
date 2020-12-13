import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


import "./TopBarIcons.scss";
import SearchIcon from '../../images/ic_search.svg'
import LoginIcon from '../../images/ic_login.svg'
import CartIcon from '../../images/ic_cart.svg'

const TopBarIcons = (props) => {
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
        <p className="TopBarIcons_Counter">{props.cart.length}</p>
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.productCategories,
  cart: state.cart
})

export default connect(mapStateToProps)(TopBarIcons);
