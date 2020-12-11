import React, { Component } from 'react';

import { connect } from "react-redux";
import { fetchProducts, fetchCategories } from '../../redux/actions/action';


class TableLamps extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
  }
  render() {
  return (
    <div>
      {
        this.props.products.filter((product => product.categoryId === "f95e6ae1-a4bd-44d5-917d-7015f6cdd592"))
        .map(({ id, categoryId, name, alias, price, image, timeStamp }) => (
          <div key={id}>
          <img src={image} alt=""/>
          <p>{name}</p>
          <p>{price}</p>
        </div>
        ))
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(TableLamps);