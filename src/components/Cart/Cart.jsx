import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import EmptyCart from "../../pages/EmptyCart/EmptyCart";
import OrderSummary from "../OrderSummary/OrderSummary";
import CartItem from "../CartItem/CartItem";

import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/actions/action';
import { selectCartItems, selectCartTotal } from "../../redux/selectors/cart.selectors";

import "./Cart.scss";

const Cart = ({ cartItems }) => {

  return (
    <div className="Cart">
      <div className="Cart_Container Container">
        {
          cartItems.length === 0 
          ? <EmptyCart /> 
          : <>
              <h2 className="Cart_Title">BASKET</h2>
              <div className="Cart_Content">
                <ul className="Cart_List">
                  {
                    cartItems.map(cartItem => <CartItem item={cartItem}/>)
                  }
                </ul>
                <OrderSummary />
              </div>
            </>
        }
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  increaseQuantity: (id, count) => dispatch(increaseQuantity(id, count)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

