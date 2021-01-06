import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/actions/action";

import SearchIcon from '../../images/ic_search.svg'
import LoginIcon from '../../images/ic_login.svg'
import CartIcon from '../../images/ic_cart.svg'

import "./TopBarIcons.scss";

const TopBarIcons = ({ cart, toggleCartHidden }) => {
  return (
    <div className="TopBarIcons">
      <button className="TopBarIcons_Button">
        <img className="TopBarIcons_Icon" src={SearchIcon} alt='Search' />
      </button>
      <NavLink className="TopBarIcons_Link" to="/login" 
              activeClassName="TopBarIcons_Link_active">
        <img className="TopBarIcons_Icon" src={LoginIcon} alt="Login" />
      </NavLink>
      <div className="TopBarIcons_Link" onClick={toggleCartHidden}>
        <img className="TopBarIcons_Icon" src={CartIcon} alt="Cart" />
        <span className="TopBarIcons_Counter">{cart.length}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBarIcons);
