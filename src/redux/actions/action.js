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
export const addToCart = (product) => ({
  type: ACTION_TYPES.ADD_TO_CART,
  payload: {
      id: product.id, 
      name: product.name, 
      alias: product.alias, 
      price: product.price, 
      image: product.image,
  }
})

export const removeFromCart = (id) => ({
  type: ACTION_TYPES.REMOVE_FROM_CART,
  payload: id
})

//Sort product
export const sortProducts = (payload) => ({
    type: ACTION_TYPES.SORT_PRODUCTS,
    payload,
})