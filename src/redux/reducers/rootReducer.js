import { combineReducers } from 'redux';
import { dataReducer } from "./dataReducer";
import { cartReducer } from "./cartReducer";
import { sortProductReducer } from "./sortProductReducer";

export const rootReducer = combineReducers ({
  data: dataReducer,
  cart: cartReducer,
  sortProducts: sortProductReducer,
});