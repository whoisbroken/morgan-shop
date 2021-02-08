import React from 'react';
import { NavLink } from "react-router-dom";
  
import CustomButton from "../../components/custom-button/custom-button";
import CartImg from "../../images/cart-img.png";

import "./EmptyCart.styles.scss";

const EmptyCart = () => {
  return (
    <main className="EmptyCart">
      <h2 className="EmptyCart_Title">Basket</h2>
      <img className="EmptyCart_Img" src={CartImg} alt="EmptyCart" />
      <p className="EmptyCart_Info">Your basket is empty</p>
      <CustomButton>
        <NavLink className="EmptyCart_Link" to="/" 
                activeClassName="EmptyCart_Link_active">
          Start shopping
        </NavLink>
      </CustomButton>
    </main>
  );
};

export default EmptyCart;