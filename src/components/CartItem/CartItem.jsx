import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import IconClose from "../../images/ic_close.svg";
import IconPlus from "../../images/ic_plus.svg";
import IconMinus from "../../images/ic_minus.svg";

import { clearItemFromCart, addItem, removeItem } from "../../redux/actions/action";
import { selectCategory } from "../../redux/selectors/data.selectors";

import "./CartItem.style.scss";

const CartItem = ({ item, category, clearItem, addItem, removeItem }) => {
  const { id, image, alias, name, price, categoryId, quantity } = item;

  return (
    <li className="Cart_Item" key={id}>
      <img className="Cart_Picture" src={`https://morgan-shop.herokuapp.com${image}`} alt={alias} />
      <div className="Cart_Inner">
        <div className="Cart_Header">
          <div className="Cart_Info">
            <div className="Cart_Category">
              {
                category.map(category => category.id === categoryId ? <span key={id}>{category.title}</span> : null )
              }
            </div>
            <div className="Cart_Name">{name}</div>
          </div>
          <button
            className="Cart_Remove">
            <img className="Cart_IconClose" onClick={() => clearItem(item)} src={IconClose} alt="Close" />
          </button>
        </div>
        <div className="Cart_Footer">
          <div className="Cart_Amount">
            <div className="Cart_Quantity">Quantity</div>
            <div className="Cart_Buttons">
              <button
                className="Cart_Decrease"
                onClick={() => removeItem(item)}
              >
                <img className="Cart_IconClose" src={IconMinus} alt="Minus" />
              </button>
              <span className="Cart_Count">{quantity}</span>
              <button
                className="Cart_Increase"
                onClick={() => addItem(item)}
              >
                <img className="Cart_IconClose" src={IconPlus} alt="Plus" />
              </button>
            </div>
          </div>
          <div className="Cart_Price">£{(quantity * price).toFixed(2)}</div>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = createStructuredSelector({
  category: selectCategory,
})

const mapDispatchToProps = dispatch => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);