import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

//import { auth } from "../../firebase/firebase.utils";

import Navigation from '../Navigation/Navigation';
import TopBarIcons from '../TopBarIcons/TopBarIcons';
import CartDropdown from "../CartDropdown/CartDropdown";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";
import { selectShowNavMenu } from "../../redux/selectors/data.selectors";
import { categoryFilter, toggleNavMenu } from "../../redux/actions/action";

import Logo from '../../images/Logo.png'
import mobileLogo from "../../images/Logo_small.png";

import "./TopBar.styles.scss";

const TopBar = ({ currentUser, hidden, categoryFilter, showNavMenu, toggleNavMenu }) => {
  return (
    <header className="TopBar">
      <div className="TopBar_Container">
        <button className={showNavMenu ? "TopBar_Hamburger on" : "TopBar_Hamburger"} aria-label="Main Menu" onClick={toggleNavMenu}>
          <svg viewBox="0 0 120 120">
            <g>
              <path class="line top" d="M35,35h50c14.1,0,50.6,13,20.5,53.5s-121.9,21.6-94.4-40.3S111.6,8.4,85,35L35,85" />
              <path class="line bottom" d="M35,85h50c14.1,0,50.6-13,20.5-53.5S-16.4,9.9,11.1,71.8S111.6,111.6,85,85L35,35" />
              <line class="line cross" x1="35" y1="60" x2="85" y2="60" />
            </g>
          </svg>
        </button>
        <NavLink className="TopBar_Link" to="/">
          <picture>
            <source srcSet={mobileLogo} media="(max-width: 323px)" />
            <img
              className="TopBar_Logo"
              srcSet={Logo}
              alt="Logo"
              onClick={() => categoryFilter("")}
            />
          </picture>
        </NavLink>
        <Navigation />
        {/* {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
          <Link className="option" to="/login">SIGN IN</Link>
        } */}
        <TopBarIcons />
      </div>
      { hidden ? null : <CartDropdown />}
    </header>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  showNavMenu: selectShowNavMenu,
})

const mapDispatchToProps = (dispatch) => ({
  categoryFilter: (id) => dispatch(categoryFilter(id)),
  toggleNavMenu: () => dispatch(toggleNavMenu()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);