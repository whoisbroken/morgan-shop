import { createSelector } from "reselect";

const selectSortProducts = state => state.sortProducts.sortBy;

export const selectSortBy = createSelector(
  [selectSortProducts],
  (sortBy) => sortBy
)