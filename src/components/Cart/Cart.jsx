import React, { Component } from 'react';
import { connect } from "react-redux";

import "./Cart.scss";
import EmptyCart from "../../pages/EmptyCart/EmptyCart";

class Cart extends Component {
  render() {
    return (
      <div className="Cart">  
        <div className="Cart_Container Container">
          {this.props.cart.length === 0 ?
           <EmptyCart /> :
           <div>non empty cart</div>
          } 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.data.products,
  categories: state.data.categories,
  cart: state.cart,
})

export default connect(mapStateToProps)(Cart);
