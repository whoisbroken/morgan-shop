import { ACTION_TYPES } from '../actions/actionTypes';

const InitialState = [{
  id:"83a3054b-c6cf-4f65-9c84-5bc8247fcceb",
  categoryId:"dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
  name:"NR2",
  alias:"nr2",
  price:"180",
  image:"https://via.placeholder.com/400.png?text=Temporary%20+%20image",
  timeStamp:"2013-06-26T16:55:1",
  inCart: false,
  },
]


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
