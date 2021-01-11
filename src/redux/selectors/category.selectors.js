import { createSelector } from "reselect";

const selectCategories = state => state.data.categories;

export const selectCategory = createSelector(
  [selectCategories],
  (category) => category
);
