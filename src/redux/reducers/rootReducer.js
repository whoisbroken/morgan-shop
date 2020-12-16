import { combineReducers } from 'redux';
import { dataReducer } from "./dataReducer";
import { cartReducer } from "./cartReducer";
import { sortProductReducer } from "./sortProductReducer";
import { quantityReducer } from "./quantityReducer";

export const rootReducer = combineReducers ({
  data: dataReducer,
  cart: cartReducer,
  sortProducts: sortProductReducer,
  quantity: quantityReducer,
});