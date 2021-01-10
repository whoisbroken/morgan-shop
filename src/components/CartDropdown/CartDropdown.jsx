import React from 'react';
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/selectors/cart.selectors";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown);