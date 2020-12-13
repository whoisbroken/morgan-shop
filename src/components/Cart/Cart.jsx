import React, { Component } from 'react';

import "./Cart.scss";
import CartImg from "../../images/cart-img.png";

class Cart extends Component {
  render() {
    return (
      <div className="Cart">  
        <div className="Cart_Container Container">
          <h2 className="Cart_Title">Basket</h2>
          <img className="Cart_Img" src={CartImg} alt="Cart"/>
          <p className="Cart_Info">Your basket is empty</p>
          <button className="Cart_Button">Start shopping</button>
        </div>
      </div>
    );
  }
}

export default Cart;