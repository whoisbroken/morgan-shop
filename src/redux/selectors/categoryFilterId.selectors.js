import {createSelector} from 'reselect'

const selectFilterId = (state) => state.data.categoryFilterId;
const selectAllProducts = (state) => state.data.products;


export const selectCategoryFilter = createSelector (
    [selectAllProducts, selectFilterId], 
    (products, filterId) => {
        if (filterId.length === 0) {
            return products;
        }

        return products.filter(product =>  product.categoryId === filterId )
    }
)
