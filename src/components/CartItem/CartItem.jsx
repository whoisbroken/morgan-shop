import React from 'react';


import IconClose from "../../images/ic_close.svg";
import IconPlus from "../../images/ic_plus.svg";
import IconMinus from "../../images/ic_minus.svg";

import "./CartItem.style.scss";

const CartItem = ({ item: { id, image, alias, name, price } }) => {
  return (
    <li className="Cart_Item" key={id}>
      <img className="Cart_Picture" src={`https://morgan-shop.herokuapp.com${image}`} alt={alias} />
      <div className="Cart_Inner">
        <div className="Cart_Header">
          <div className="Cart_Info">
            <div className="Cart_Category">

            </div>
            <div className="Cart_Name">{name}</div>
          </div>
          <button
            className="Cart_Remove">
            <img className="Cart_IconClose" src={IconClose} alt="Close" />
          </button>
        </div>
        <div className="Cart_Footer">
          <div className="Cart_Amount">
            <div className="Cart_Quantity">Quantity</div>
            <div className="Cart_Buttons">
              <button
                className="Cart_Decrease"
              >
                <img className="Cart_IconClose" src={IconMinus} alt="Minus" />
              </button>
              <input
                type="number"
                className="Cart_Count" />
              <button
                className="Cart_Increase">
                <img className="Cart_IconClose" src={IconPlus} alt="Plus" />
              </button>
            </div>
          </div>
          <div className="Cart_Price">{`£` + parseFloat(price).toFixed(2)}</div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;