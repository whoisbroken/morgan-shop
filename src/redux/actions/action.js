import { ACTION_TYPES } from "./actionTypes";

const fetchProductsStart = { type: ACTION_TYPES.FETCH_PRODUCTS_START };
const fetchProductsSuccess = { type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS };
const fetchProductsError = { type: ACTION_TYPES.FETCH_PRODUCTS_ERROR };

const fetchCategoriesStart = { type: ACTION_TYPES.FETCH_CATEGORIES_START };
const fetchCategoriesSuccess = { type: ACTION_TYPES.FETCH_CATEGORIES_SUCCESS };
const fetchCategoriesError = { type: ACTION_TYPES.FETCH_CATEGORIES_ERROR };

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