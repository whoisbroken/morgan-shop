import React from 'react';

import "./CheckoutItem.style.scss";

const CheckoutItem = ({ item: { image, alias, name, price, quantity } }) => {
  return (
    <div className="CheckoutItem">
      <img src={`https://morgan-shop.herokuapp.com${image}`} alt={alias} />
      <div className="Item_Details">
        <span className="Item_Name">{name}</span>
        <span className="Item_Price">{quantity} x £{parseFloat(price).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutItem;