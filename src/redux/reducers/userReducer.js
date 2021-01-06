import { ACTION_TYPES } from '../actions/actionTypes';

const initialState = {
  currentUser: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}