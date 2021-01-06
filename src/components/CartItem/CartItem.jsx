import React from 'react';

import "./CartItem.style.scss";

const CartItem = ({ item: { image, alias, name, price, quantity } }) => {
  return (
    <div className="Cart_Item">
      <img src={`https://morgan-shop.herokuapp.com${image}`} alt={alias} />
      <div className="Item_Details">
        <span className="Item_Name">{name}</span>
        <span className="Item_Price">{quantity} x {price}</span>
      </div>
    </div>
  );
};

export default CartItem;