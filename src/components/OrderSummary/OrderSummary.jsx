import React from 'react';
import { connect } from "react-redux"
import {NavLink} from 'react-router-dom'

import "./OrderSummary.scss";

const OrderSummary = (props) => {
  return (
      <div className="OrderSummary">
        <h3 className="OrderSummary_Title">Order Summary</h3>

        {props.cart &&
          props.cart.map(({ id, categoryId, name, alias, price, image, timeStamp }) => {
            return (<div key={id} className="OrderSummary_Item">
              <span>{name}</span>
              <span>{`£` + parseFloat(price).toFixed(2)}</span>
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
          <span className="OrderSummary_TotalPrice">£</span>
        </div>

        <NavLink className="OrderSummary_Button_Link" to="/" >checkout</NavLink>
        <NavLink className="OrderSummary_Link" to="/">Continue shopping</NavLink>
      </div>
    )
};
const mapStateToProps = (state) => ({
  cart: state.cart,
  quantity: state.quantity,
});

export default connect(mapStateToProps)(OrderSummary)