import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/selectors/cart.selectors";
import { toggleCartHidden } from "../../redux/actions/action";

import CustomButton from "../custom-button/custom-button";
import CheckoutItem from "../CheckoutItem/CheckoutItem";

import "./CartDropdown.style.scss";

const CartDropdown = ({ cartItems, dispatch }) => {
  return (
    <section className="Cart_Dropdown">
      <div className="Cart_Dropdown-List">
        {
          cartItems.length 
          ? cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)
          : <span className="Empty_Message">Your cart is empty</span>
        } 
      </div>
      <CustomButton >
        <NavLink onClick={() => dispatch(toggleCartHidden())} to="/cart">GO TO CHECKOUT</NavLink>
      </CustomButton>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown);