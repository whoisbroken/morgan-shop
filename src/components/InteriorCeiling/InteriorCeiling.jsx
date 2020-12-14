import React, { Component } from 'react';
import { connect } from "react-redux";

import "./InteriorCeiling.scss";
import AddIcon from "../../images/add.svg"
import removeIcon from "../../images/remove.svg"
import { fetchProducts, fetchCategories, addToCart, removeFromCart } from '../../redux/actions/action';


class InteriorCeiling extends Component {
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
      <div className="InteriorCeiling">
        <div className="InteriorCeiling_Container Container">
          <div className="InteriorCeiling_Sort">
              <span className="Sort-Title">Sort by:</span>
              <select className="Sort-Select">
                  <option value={"hightToLow"} className="Sort-Option">Price hight to low</option>
                  <option value={"lowToHight"} className="Sort-Option">Price low to hight</option>
                  <option value={"sortNewness"} className="Sort-Option">Newness</option>
              </select>
          </div>
          <ul className="InteriorCeiling_List" >
            {
              this.props.products.filter((product => product.categoryId === "dc4437c1-364b-4ba5-992a-15f55ca2d8eb"))
                .map((product) => (
                  <li className="InteriorCeiling_Item" key={product.id}>
                     {
                      this.props.cart.find(item => item.id === product.id) ?
                        <button
                          className='ProductList_Button'
                          alt='symbol'
                          onClick={() => this.handleRemoveFromCart(product.id)}
                        >
                          <img src={removeIcon} alt="remove" />
                        </button> :
                        <button
                          className='ProductList_Button'
                          alt='symbol'
                          onClick={() => this.handleAddToCart(product)}
                        >
                          <img src={AddIcon} alt="add" />
                        </button>
                    }
                    <img className="InteriorCeiling_Img" src={product.image} alt="" />
                    <div className="InteriorCeiling_Box">
                      <p className="InteriorCeiling_Name">{product.name}</p>
                      <p className="InteriorCeiling_Price">{+ product.price ? `£` + parseFloat(product.price).toFixed(2) : null}</p>
                    </div>
                  </li>
                ))
            }
          </ul>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InteriorCeiling);