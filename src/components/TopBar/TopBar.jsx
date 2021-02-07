import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import Navigation from '../Navigation/Navigation';
import TopBarIcons from '../TopBarIcons/TopBarIcons';
import CartDropdown from "../CartDropdown/CartDropdown";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";
import { categoryFilter } from "../../redux/actions/action";

import Logo from '../../images/Logo.png'
import mobileLogo from "../../images/Logo_small.png";

import "./TopBar.styles.scss";

const TopBar = ({ currentUser, hidden, categoryFilter }) => {
    return (
      <header className="TopBar">
        <div className="TopBar_Container">
          <div className="TopBar_BurgerMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <NavLink className="TopBar_Link" to="/">
            <picture>
              <source srcSet={Logo} media="(min-width: 323px)" />
              <img 
                className="TopBar_Logo" 
                srcSet={mobileLogo}
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
        { hidden ? null : <CartDropdown /> }
      </header>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
  categoryFilter: (id) => dispatch(categoryFilter(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);