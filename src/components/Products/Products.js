import React, { Component } from 'react';

import { connect } from "react-redux";
import ProductsList from "../ProductsList/ProductsList.jsx";
import { fetchProducts, fetchCategories } from '../../redux/actions/action';


class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  render() {
    return (
    <div>
      <ProductsList 
        products={this.props.products}
        categories={this.props.categories}
      />
    </div>
  );
  }
};
const mapStateToProps = (state) => ({
  products: state.data.products,
  categories: state.data.categories
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCategories: () => dispatch(fetchCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);