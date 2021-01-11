import { createSelector } from "reselect";

const selectProducts = state => state.data.products;

const selectCategories = state => state.data.categories;

const selectProductsSize = state => state.data.productsListSize;

export const selectProduct = createSelector(
  [selectProducts],
  (products) => products
)

export const selectCategory = createSelector(
  [selectCategories],
  (category) => category
);

export const selectProductsSizeNumber = createSelector(
  [selectProductsSize],
  (size) => size
);