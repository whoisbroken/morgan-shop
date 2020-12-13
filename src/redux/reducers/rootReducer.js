import { combineReducers } from 'redux';
import { dataReducer } from "./dataReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers ({
  data: dataReducer,
  cart: cartReducer,
});