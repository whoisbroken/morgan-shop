import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchProducts, fetchCategories } from '../../redux/actions/action';


class FloorLamps extends Component {
  componentDidMount() {
    return this.props.products.length === 0 ? this.props.fetchProducts() : null
  }

  render() {
    return (
      <div>
        {
          this.props.products.filter((product => product.categoryId === "66ef32ef-03ad-48c2-b295-bdfc018b5881"))
            .map(({ id, categoryId, name, alias, price, image, timeStamp }) => (
              <div key={id}>
                <img src={image} alt="" />
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

export default connect(mapStateToProps, mapDispatchToProps)(FloorLamps);