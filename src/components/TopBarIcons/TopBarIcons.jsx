import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/actions/action";
import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { selectCartItemsCount } from "../../redux/selectors/cart.selectors";

import SearchIcon from '../../images/ic_search.svg'
import LoginIcon from '../../images/ic_login.svg'
import CartIcon from '../../images/ic_cart.svg'

import "./TopBarIcons.scss";

const TopBarIcons = ({ itemCount, toggleCartHidden }) => {
  return (
    <div className="TopBarIcons">
      <button className="TopBarIcons_Button">
        <img className="TopBarIcons_Icon" src={SearchIcon} alt='Search' />
      </button>
      <NavLink 
        className="TopBarIcons_Link" 
        to="/login"
        activeClassName="TopBarIcons_Link_active"
      >
        <img className="TopBarIcons_Icon" src={LoginIcon} alt="Login" />
      </NavLink>
      <NavLink 
        className="TopBarIcons_Link" 
        to="/cart"
        onClick={(e) => {
          e.preventDefault();
          toggleCartHidden();
        }}
        activeClassName="TopBarIcons_Link_active"
      >
        <img className="TopBarIcons_Icon" src={CartIcon} alt="Cart" />
        <span className="TopBarIcons_Counter">{itemCount}</span>
      </NavLink>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBarIcons);
