import React from 'react';
import { connect } from "react-redux";


import SortProducts from "../SortProducts/SortProducts";
import ProductsList from "../ProductsList/ProductsList.jsx";
import { fetchProducts, fetchCategories, addToCart, removeFromCart  } from '../../redux/actions/action';

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
      />
    </div>
  );

};

const mapStateToProps = (state) => ({
  products: state.data.products,
  categories: state.data.categories,
  cart: state.cart,
  sortProducts: state.sortProducts.sortBy,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCategories: () => dispatch(fetchCategories()),
  addToCart: (product) => dispatch(addToCart(product)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);