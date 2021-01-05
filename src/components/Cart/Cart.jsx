import React from 'react';
import { connect } from "react-redux";

import "./Cart.scss";
import IconClose from "../../images/ic_close.svg"
import IconPlus from "../../images/ic_plus.svg"
import IconMinus from "../../images/ic_minus.svg"
import EmptyCart from "../../pages/EmptyCart/EmptyCart";
import OrderSummary from "../OrderSummary/OrderSummary";
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/actions/action';


const Cart = ({ products, cart, categories, quantity, removeFromCart, increaseQuantity, decreaseQuantity }) => {

  const handleRemoveFromCart = (id) => {
    removeFromCart(id)
  };

  let count;

  return (
    <div className="Cart">
      <div className="Cart_Container Container">
        {cart.length === 0 ?
          <EmptyCart /> :
          <>
            <h2 className="Cart_Title">BASKET</h2>
            <div className="Cart_Content">
            <ul className="Cart_List">
              {cart.map((product) => {
                return (
                  <li className="Cart_Item" key={product.id}>
                    <img className="Cart_Picture" src={`https://morgan-shop.herokuapp.com${product.image}`} alt={product.alias} />
                    <div className="Cart_Inner">
                      <div className="Cart_Header">
                        <div className="Cart_Info">
                          <div className="Cart_Category">
                            
                          </div>
                          <div className="Cart_Name">{product.name}</div>
                        </div>
                        <button
                          className="Cart_Remove"
                          onClick={() => handleRemoveFromCart(product.id)}>
                          <img className="Cart_IconClose" src={IconClose} alt="Close" />
                        </button>
                      </div>
                      <div className="Cart_Footer">
                        <div className="Cart_Amount">
                          <div className="Cart_Quantity">Quantity</div>
                          <div className="Cart_Buttons">
                            <button
                            className="Cart_Decrease"
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            <img className="Cart_IconClose" src={IconMinus} alt="Minus"/>
                          </button>
                          <input
                            type="number"
                            className="Cart_Count"
                            value={product.counter}
                            onChange={(e) => quantity}/>
                          <button
                            className="Cart_Increase"
                            onClick={() => increaseQuantity(product.id, count = 1)}>
                            <img className="Cart_IconClose" src={IconPlus} alt="Plus"/>
                          </button>
                          </div>
                        </div>
                        <div className="Cart_Price">{`£` + parseFloat(product.price).toFixed(2)}</div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            <OrderSummary />
            </div>
            
          </>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.data.products,
  categories: state.data.categories,
  cart: state.cart,
  quantity: state.quantity
})

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  increaseQuantity: (id, count) => dispatch(increaseQuantity(id, count)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

