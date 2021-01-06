import { ACTION_TYPES } from '../actions/actionTypes';

const initialState = {
  products: [],
  categories: [],
  productsListSize: 12,
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_PRODUCTS:
      return { ...state, ...action.payload  };
    case ACTION_TYPES.FETCH_CATEGORIES:
      return { ...state, ...action.payload };
    case ACTION_TYPES.SHOW_MORE_PRODUCTS:
      return { ...state, productsListSize: action.payload}
    default:
      return state;
  }
}