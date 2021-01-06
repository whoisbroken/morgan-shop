import { combineReducers } from 'redux';
import { dataReducer } from "./dataReducer";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { sortProductReducer } from "./sortProductReducer";
import { quantityReducer } from "./quantityReducer";

export const rootReducer = combineReducers ({
  data: dataReducer,
  user: userReducer,
  cart: cartReducer,
  sortProducts: sortProductReducer,
  quantity: quantityReducer,
});