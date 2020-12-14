import React, { Component } from 'react';
import { connect } from "react-redux";

import "./TableLamps.scss";
import AddIcon from "../../images/add.svg"
import removeIcon from "../../images/remove.svg"
import { fetchProducts, fetchCategories, addToCart, removeFromCart } from '../../redux/actions/action';


class TableLamps extends Component {
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
      <div className="TableLamps">
        <div className="TableLamps_Container Container">
          <div className="TableLamps_Sort">
              <span className="Sort-Title">Sort by:</span>
              <select className="Sort-Select">
                  <option value={"hightToLow"} className="Sort-Option">Price hight to low</option>
                  <option value={"lowToHight"} className="Sort-Option">Price low to hight</option>
                  <option value={"sortNewness"} className="Sort-Option">Newness</option>
              </select>
          </div>
          <ul className="TableLamps_List" >
            {
              this.props.products.filter((product => product.categoryId === "f95e6ae1-a4bd-44d5-917d-7015f6cdd592"))
                .map((product) => (

                  <li className="TableLamps_Item" key={product.id}>
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
                    <img className="TableLamps_Img" src={product.image} alt="" />
                    <div className="TableLamps_Box">
                      <p className="TableLamps_Name">{product.name}</p>
                      <p className="TableLamps_Price">{+ product.price ? `£` + parseFloat(product.price).toFixed(2) : null}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableLamps);