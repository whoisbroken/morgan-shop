import React, { Component } from 'react';

import { connect } from "react-redux";

class FloorLamps extends Component {
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

export default connect(mapStateToProps)(FloorLamps);