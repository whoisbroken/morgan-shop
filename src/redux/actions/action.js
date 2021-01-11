import { ACTION_TYPES } from "./actionTypes";

const fetchProductsStart = { type: ACTION_TYPES.FETCH_PRODUCTS_START };
const fetchProductsSuccess = { type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS };
const fetchProductsError = { type: ACTION_TYPES.FETCH_PRODUCTS_ERROR };

const fetchCategoriesStart = { type: ACTION_TYPES.FETCH_CATEGORIES_START };
const fetchCategoriesSuccess = { type: ACTION_TYPES.FETCH_CATEGORIES_SUCCESS };
const fetchCategoriesError = { type: ACTION_TYPES.FETCH_CATEGORIES_ERROR };


// Fetch data
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart);
  
    fetch("https://morgan-shop.herokuapp.com/products")
      .then(res => res.json())  
      .then(products => {
        dispatch({ type: ACTION_TYPES.FETCH_PRODUCTS, payload: products });
        dispatch(fetchProductsSuccess);
      })
      .catch(() => dispatch(fetchProductsError))
  
  }
};

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesStart);
  
    fetch("https://morgan-shop.herokuapp.com/categories")
      .then(res => res.json())  
      .then(categories => {
        dispatch({ type: ACTION_TYPES.FETCH_CATEGORIES, payload: categories });
        dispatch(fetchCategoriesSuccess);
      })
      .catch(() => dispatch(fetchCategoriesError))
  
  }
};

// Cart
export const addItem = (item) => ({
  type: ACTION_TYPES.ADD_ITEM,
  payload: item
})

export const removeItem = (item) => ({
  type: ACTION_TYPES.REMOVE_ITEM,
  payload: item
})

export const clearItemFromCart = (item) => ({
  type: ACTION_TYPES.CLEAR_ITEM_FROM_CART,
  payload: item
})

//ShowMoreProducts
export const showMoreProducts = (value) => ({
  type: ACTION_TYPES.SHOW_MORE_PRODUCTS,
  payload: value + 8
})

//Sort product
export const sortProducts = (payload) => ({
    type: ACTION_TYPES.SORT_PRODUCTS,
    payload,
})

//Quantity products
export const increaseQuantity = (productId, count) => ({
  type: ACTION_TYPES.INCREASE_QUANTITY,
  payload: { productId, count }
})

export const decreaseQuantity = (productId) => ({
  type: ACTION_TYPES.DECREASE_QUANTITY,
  payload: {productId}
})

// setting current user
export const setCurrentUser = (user) => ({
  type: ACTION_TYPES.SET_CURRENT_USER,
  payload: user,
})

//toggle cart dropdown
export const toggleCartHidden = () => ({
  type: ACTION_TYPES.TOGGLE_CART_HIDDEN,
})