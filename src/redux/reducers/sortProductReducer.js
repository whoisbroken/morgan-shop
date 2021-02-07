import { ACTION_TYPES } from '../actions/actionTypes';

const initialState = {
  sortBy: "",
}

export const sortProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SORT_PRODUCTS:
      return { sortBy: action.payload };
    default:
      return state;
  }
};