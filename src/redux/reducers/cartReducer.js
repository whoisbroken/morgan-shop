import { ACTION_TYPES } from '../actions/actionTypes';
import { addItemToCart, removeItemFromCart } from "../utils/cart.utils";

const InitialState = {
    hidden: true,
    cartItems: [],
};


export const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ACTION_TYPES.ADD_ITEM:
      return {
        ...state, 
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state, 
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case ACTION_TYPES.CLEAR_ITEM_FROM_CART:
      return {
        ...state, 
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
        return state;
  }
}
