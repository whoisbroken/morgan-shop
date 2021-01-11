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

const TopBarIcons = ({ currentUser, itemCount, toggleCartHidden }) => {
  return (
    <div className="TopBarIcons">
      <button className="TopBarIcons_Button">
        <img className="TopBarIcons_Icon" src={SearchIcon} alt='Search' />
      </button>
      <NavLink className="TopBarIcons_Link" to="/login"
        activeClassName="TopBarIcons_Link_active">
        <img className="TopBarIcons_Icon" src={LoginIcon} alt="Login" />
        {/* {
          currentUser ? <span className="option">{currentUser.currentUser.displayName}</span> : null
        } */}
      </NavLink>
      <div className="TopBarIcons_Link" onClick={toggleCartHidden}>
        <img className="TopBarIcons_Icon" src={CartIcon} alt="Cart" />
        <span className="TopBarIcons_Counter">{itemCount}</span>
      </div>
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
