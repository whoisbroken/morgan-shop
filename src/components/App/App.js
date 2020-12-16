import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';

import ScrollToTop from "../../utils/ScrollToTop";
import "./App.scss";
import TopBar from '../TopBar/TopBar.jsx';
import Routes from '../../Routes';
import { fetchProducts, fetchCategories } from '../../redux/actions/action';


class App extends Component {  
  componentDidMount = () => {
    this.props.fetchProducts()
    this.props.fetchCategories()
  }
  render() {
  return (
      <Router>
        <ScrollToTop />
        <TopBar />
        <Routes />
      </Router>
  );     
 }
}

 const mapStateToProps = (state) => ({
  products: state.data.products,
  categories: state.data.categories,
  cart: state.cart,
  sortProducts: state.sortProducts.sortBy,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCategories: () => dispatch(fetchCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

