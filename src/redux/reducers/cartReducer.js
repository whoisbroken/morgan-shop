import { ACTION_TYPES } from '../actions/actionTypes';

const InitialState = [];


export const cartReducer = (state = InitialState, action) => {
    
  switch (action.type) {
      case ACTION_TYPES.ADD_TO_CART:
          return [...state, action.payload]
      case ACTION_TYPES.REMOVE_FROM_CART:
          return [...state.filter(item => item.id !== action.payload)]
      default:
          return state
  }
}
