import React from 'react';
import  { connect } from 'react-redux';

import SortProducts from "../SortProducts/SortProducts";
import ProductsList from "../ProductsList/ProductsList.jsx";
import { fetchProducts, addToCart, removeFromCart, showMoreProducts } from '../../redux/actions/action';

const Products = (props) => {
 const handleAddToCart = (product) => {
    props.addToCart(product)
  };
  
  const handleRemoveFromCart = (id) => {
    props.removeFromCart(id)
  };

    return (
    <div>
      <SortProducts /> 
      <ProductsList 
        products={props.products}
        categories={props.categories}
        cart={props.cart}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        sortProducts={props.sortProducts}
        fetchProducts={props.fetchProducts}
        productsListSize={props.productsListSize}
        showMoreProducts={props.showMoreProducts}
      />
    </div>
  );

};

const mapStateToProps = (state) => ({
  products: state.data.products,
  categories: state.data.categories,
  cart: state.cart,
  sortProducts: state.sortProducts.sortBy,
  productsListSize: state.data.productsListSize
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  addToCart: (product) => dispatch(addToCart(product)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  showMoreProducts: (value) => dispatch(showMoreProducts(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);