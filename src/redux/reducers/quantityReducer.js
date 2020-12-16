import {
    ACTION_TYPES
} from '../actions/actionTypes';

const InitialState = {}


export const quantityReducer = (state = InitialState, action) => {
    let count = action.payload ? action.payload.count : 1;  
    switch (action.type) {
        case ACTION_TYPES.INCREASE_QUANTITY:
            return {
                ...state, [action.payload.productId]: ++count
            }
            count += 1
            case ACTION_TYPES.DECREASE_QUANTITY:
                return state - 1
            default:
                return state
    }
    
}