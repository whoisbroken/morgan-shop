import React from 'react';

import "./ProductsList.scss";
import AddIcon from "../../images/add.svg";
import removeIcon from "../../images/remove.svg"

const ProductList = ({ products, cart, handleAddToCart, handleRemoveFromCart }) => {

  return (
    <ul className="ProductList_List" >
      {products ?
        products.map(product => {
          return (
            <li className="ProductList_Item" key={product.id}>
              {
                cart.find(item => item.id === product.id) ?
                  <button
                    className='ProductList_Button'
                    alt='symbol'
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    <img src={removeIcon} alt="remove" />
                  </button> :
                  <button
                    className='ProductList_Button'
                    alt='symbol'
                    onClick={() => handleAddToCart(product)}
                  >
                    <img src={AddIcon} alt="add" />
                  </button>
              }
              <img className="ProductList_Img" src={product.image} alt="" />
              <div className="ProductList_Box">
                <p className="ProductList_Name">{product.name}</p>
                <p className="ProductList_Price">{+ product.price ? `£` + parseFloat(product.price).toFixed(2) : null}</p>
              </div>
            </li>
          )
        })
        : null}
    </ul>
  );
};

export default ProductList;