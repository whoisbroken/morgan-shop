import { combineReducers } from 'redux';
import { dataReducer } from "./dataReducer";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { sortProductReducer } from "./sortProductReducer";

export const rootReducer = combineReducers ({
  data: dataReducer,
  user: userReducer,
  cart: cartReducer,
  sortProducts: sortProductReducer,
});