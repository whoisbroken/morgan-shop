import React from 'react';
import { NavLink } from "react-router-dom";
  
import "./EmptyCart.scss";
import CartImg from "../../images/cart-img.png";

const EmptyCart = () => {
  return (
    <div className="EmptyCart">
      <h2 className="EmptyCart_Title">Basket</h2>
      <img className="EmptyCart_Img" src={CartImg} alt="EmptyCart" />
      <p className="EmptyCart_Info">Your basket is empty</p>
      <button className="EmptyCart_Button">
      <NavLink className="EmptyCart_Button_Link" to="/" 
              activeClassName="EmptyCart_Button_Link_active">
        Start shopping
      </NavLink>
      </button>
    </div>
  );
};

export default EmptyCart;