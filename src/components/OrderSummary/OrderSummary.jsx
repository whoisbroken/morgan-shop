import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/selectors/cart.selectors";

import "./OrderSummary.scss";

const OrderSummary = ({ cartItems, total }) => {
  return (
      <div className="OrderSummary">
        <h3 className="OrderSummary_Title">Order Summary</h3>
        {cartItems &&
          cartItems.map(({ id, name, price }) => {
            return (<div key={id} className="OrderSummary_Item">
              <span>{name}</span>
              <span>£ {parseFloat(price).toFixed(2)}</span>
            </div>
            )
          })
        }

        <div className="OrderSummary_Delivery">
          <span>Express Delivery </span>
          <span>£10.00</span>
        </div>

        <div className="OrderSummary_Total">
          <span>Estimated Total</span>
          <span className="OrderSummary_TotalPrice">£ {(total + 10).toFixed(2)}</span>
        </div>

        <NavLink className="OrderSummary_Button_Link" to="/" >checkout</NavLink>
        <NavLink className="OrderSummary_Link" to="/">Continue shopping</NavLink>
      </div>
    )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(OrderSummary)