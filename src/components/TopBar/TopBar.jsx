import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';

import { auth } from "../../firebase/firebase.utils";

import Navigation from '../Navigation/Navigation';
import TopBarIcons from '../TopBarIcons/TopBarIcons';
import CartDropdown from "../CartDropdown/CartDropdown";

import Logo from '../../images/Logo.png'
import LogoSmall from '../../images/Logo_small.png'

import "./TopBar.scss";

const TopBar = ({ currentUser, hidden }) => {
    return (
      <div className="TopBar">
        <div className="TopBar_Container Container">
          <div className="TopBar_BurgerMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <NavLink className="TopBar_Link" to="/">
            <img className="TopBar_Logo" src={Logo} alt="Logo" />
            <img className="TopBar_LogoSmall" src={LogoSmall} alt="Logo" />
          </NavLink>
          <Navigation />
          {
            currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
            <Link className="option" to="/login">SIGN IN</Link>
          }
          <TopBarIcons />
        </div>
        { hidden ? null : <CartDropdown /> }
      </div>
    );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
})


export default connect(mapStateToProps)(TopBar);