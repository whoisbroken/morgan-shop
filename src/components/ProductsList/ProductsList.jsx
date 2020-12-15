import React, { useEffect, useState } from 'react';

import "./ProductsList.scss";
import AddIcon from "../../images/add.svg";
import removeIcon from "../../images/remove.svg"

const ProductList = (props) => {
 const [sortBy, setSortBy] = useState(props.sortProducts.value)

  if (props.products) {
      if (sortBy === "hightToLow") props.products.sort((a, b) => b.price - a.price)
      else if (sortBy === "lowToHight") props.products.sort((a, b) => a.price - b.price)
      else if (sortBy === "sortNewness") props.products.sort((a, b) => {
          let dataA = new Date(a.timeStamp)
          let dataB = new Date(b.timeStamp)
          return dataB - dataA
      })
  }

  useEffect(() => {
      setSortBy(props.sortProducts.value)
      return () => {
          setSortBy("")
      }
  }, [props.sortProducts.value])

  return (
    <ul className="ProductList_List" >
      { props.products.length !== 0 ? 
        props.products.map(product => {
          return (
            <li className="ProductList_Item" key={product.id}>
              {
                props.cart.find(item => item.id === product.id) ?
                  <button
                    className='ProductList_Button'
                    alt='symbol'
                    onClick={() => props.handleRemoveFromCart(product.id)}
                  >
                    <img src={removeIcon} alt="remove" />
                  </button> :
                  <button
                    className='ProductList_Button'
                    alt='symbol'
                    onClick={() => props.handleAddToCart(product)}
                  >
                    <img src={AddIcon} alt="add" />
                  </button>
              }
              <img className="ProductList_Img" src={`https://morgan-shop.herokuapp.com${product.image}`} alt="" />
              <div className="ProductList_Box">
                <p className="ProductList_Name">{product.name}</p>
                <p className="ProductList_Price">{+ product.price ? `£` + parseFloat(product.price).toFixed(2) : null}</p>
              </div>
            </li>
          )
        }) : 
          props.fetchProducts()
      }
    </ul>
  );
};

export default ProductList;