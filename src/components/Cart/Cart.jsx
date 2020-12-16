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

  return (
    <div className="Cart">
      <div className="Cart_Container Container">
        {cart.length === 0 ?
          <EmptyCart /> :
          <>
            <h2 className="Cart-Title">BASKET</h2>
            <div className="Cart_Content">
            <ul className="Cart-List">
              {cart.map((product) => {
                return (
                  <li className="Cart-Item" key={product.id}>
                    <img src={`https://morgan-shop.herokuapp.com${product.image}`} alt={product.alias} className="Cart-Picture" />
                    <div className="Cart-Inner">
                      <div className="Cart-Header">
                        <div className="Cart-Info">
                          <div className="Cart-Category">
                            
                          </div>
                          <div className="Cart-Name">{product.name}</div>
                        </div>
                        <button
                          className="Cart-Remove"
                          onClick={() => handleRemoveFromCart(product.id)}>
                          <img src={IconClose} alt="Close" className="Cart-IconClose" />
                        </button>
                      </div>
                      <div className="Cart-Footer">
                        <div className="Cart-Amount">
                          <div className="Cart-Quantity">Quantity</div>
                          <div className="Cart-Buttons">
                            <button
                            className="Cart-Decrease"
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            <img src={IconMinus} alt="Minus" className="Cart-IconClose"/>
                          </button>
                          <input
                            type="number"
                            className="Cart-Count"
                            value={product.counter}
                            onChange={(e) => console.log(e)} />
                          <button
                            className="Cart-Increase"
                            onClick={() => increaseQuantity(product.id)}>
                            <img src={IconPlus} alt="Plus" className="Cart-IconClose"/>
                          </button>
                          </div>
                        </div>
                        <div className="Cart-Price">{`£` + parseFloat(product.price).toFixed(2)}</div>
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
  increaseQuantity: (id) => dispatch(increaseQuantity(id, 1)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

