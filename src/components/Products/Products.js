import React, { Component } from 'react';
import { connect } from "react-redux";

import ProductsList from "../ProductsList/ProductsList.jsx";
import { fetchProducts, fetchCategories } from '../../redux/actions/action';
import { addToCart, removeFromCart } from "../../redux/actions/action";

class Products extends Component {
  componentDidMount() {
    return this.props.products.length === 0 ? this.props.fetchProducts() : null
  }

  handleAddToCart = (product) => {
    this.props.addToCart(product)
  }
  
  handleRemoveFromCart = (id) => {
    this.props.removeFromCart(id)
  }

  render() {
    return (
    <div>
      <ProductsList 
        products={this.props.products}
        categories={this.props.categories}
        cart={this.props.cart}
        handleAddToCart={this.handleAddToCart}
        handleRemoveFromCart={this.handleRemoveFromCart}
      />
    </div>
  );
  }
};
const mapStateToProps = (state) => ({
  products: state.data.products,
  categories: state.data.categories,
  cart: state.cart,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCategories: () => dispatch(fetchCategories()),
  addToCart: (product) => dispatch(addToCart(product)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);