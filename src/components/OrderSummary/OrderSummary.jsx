import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/selectors/cart.selectors";

import "./OrderSummary.style.scss";

const OrderSummary = ({ cartItems, total }) => {
  const EXPRESS_DELIVERY = 10;

  return (
      <div className="OrderSummary">
        <h3 className="OrderSummary_Title">Order Summary</h3>
        {
          cartItems &&
          cartItems.map(({ id, name, price, quantity }) => {
            return (
              <div key={id} className="OrderSummary_Item">
                <span>{name}</span>
                <span>{quantity} x £{parseFloat(price).toFixed(2)}</span>
              </div>
            )
          })
        }

        <div className="OrderSummary_Delivery">
          <span>Express Delivery </span>
          <span>£{EXPRESS_DELIVERY.toFixed(2)}</span>
        </div>

        <div className="OrderSummary_Total">
          <span>Estimated Total</span>
          <span className="OrderSummary_TotalPrice">£{(total + EXPRESS_DELIVERY).toFixed(2)}</span>
        </div>

        <NavLink className="OrderSummary_Button_Link" to="/" >checkout</NavLink>
        <NavLink className="OrderSummary_Link" to="/" >Continue shopping</NavLink>
      </div>
    )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(OrderSummary)