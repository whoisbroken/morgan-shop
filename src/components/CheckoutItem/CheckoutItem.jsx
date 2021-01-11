import React from 'react';

import "./CheckoutItem.style.scss";

const CheckoutItem = ({ item: { image, alias, name, price, quantity } }) => {
  return (
    <div className="CheckoutItem">
      <img src={`https://morgan-shop.herokuapp.com${image}`} alt={alias} />
      <div className="Item_Details">
        <span className="Item_Name">{name}</span>
        <div className="Item_Summary">
          <span className="Item_Count">{quantity} x </span>
          <span className="Item_Price">£{parseFloat(price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;