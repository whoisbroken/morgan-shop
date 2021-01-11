import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import EmptyCart from "../../pages/EmptyCart/EmptyCart";
import OrderSummary from "../OrderSummary/OrderSummary";
import CartItem from "../CartItem/CartItem";

import { selectCartItems, selectCartTotal } from "../../redux/selectors/cart.selectors";

import "./Cart.style.scss";

const Cart = ({ cartItems }) => {
  return (
    <div className="Cart">
      <div className="Cart_Container Container">
        {
          cartItems.length === 0 
          ? <EmptyCart /> 
          : <div>
              <h2 className="Cart_Title">BASKET</h2>
              <div className="Cart_Content">
                <ul className="Cart_List">
                  {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                  }
                </ul>
                <OrderSummary />
              </div>
            </div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(Cart);

