import React, { useEffect, useState } from 'react';
import  { connect } from 'react-redux';

import { addToCart } from '../../redux/actions/action';

import AddIcon from "../../images/add.svg";
import removeIcon from "../../images/remove.svg";

import "./ProductsList.scss";

const ProductsList = (props) => {
//  const [sortBy, setSortBy] = useState(props.sortProducts.value)

//   if (props.products) {
//       if (sortBy === "hightToLow") props.products.sort((a, b) => b.price - a.price)
//       else if (sortBy === "lowToHight") props.products.sort((a, b) => a.price - b.price)
//       else if (sortBy === "sortNewness") props.products.sort((a, b) => {
//           let dataA = new Date(a.timeStamp)
//           let dataB = new Date(b.timeStamp)
//           return dataB - dataA
//       })
//   }

//   useEffect(() => {
//       setSortBy(props.sortProducts.value)
//       return () => {
//           setSortBy("")
//       }
//   }, [props.sortProducts.value])

  return (
    <div>
      <ul className="ProductsList_List" >
        { props.products.length !== 0 ? 
          props.products.slice(0, props.productsListSize).map(product => {
            return (
              <li className="ProductsList_Item" key={product.id}>
                {/* {
                  props.cart.find(item => item.id === product.id) ?
                    <button
                      className='ProductsList_Item_Button'
                      alt='symbol'
                      onClick={() => props.handleRemoveFromCart(product.id)}
                    >
                      <img src={removeIcon} alt="remove" />
                    </button> : */}
                    <button
                      className='ProductsList_Item_Button'
                      alt='symbol'
                      onClick={() => props.addToCart(product)}
                    >
                      <img src={AddIcon} alt="add" />
                    </button>
                {/* // } */}
                <img className="ProductsList_Img" src={`https://morgan-shop.herokuapp.com${product.image}`} alt="" />
                <div className="ProductsList_Box">
                  <p className="ProductsList_Name">{product.name}</p>
                  <p className="ProductsList_Price">{+ product.price ? `£` + parseFloat(product.price).toFixed(2) : null}</p>
                </div>
              </li>
            )
          }) : null
            // props.fetchProducts()
        }
      </ul>
      {props.products.length <= props.productsListSize ? 
          <button 
            className="ProductsList_Button">
              Roll up
          </button> 
          :
          <button 
            className="ProductsList_Button"
            onClick={() => props.showMoreProducts(props.productsListSize)} >
              Show more
          </button> 
        }
    </div>
  );
  
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
})

export default connect(null, mapDispatchToProps)(ProductsList);
