import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import "./ExteriorCeiling.scss";
import AddIcon from "../../images/add.svg";
import removeIcon from "../../images/remove.svg"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SortProducts from "../SortProducts/SortProducts";
import { fetchProducts, fetchCategories } from '../../redux/actions/action';


const ExteriorCeiling = (props) => {

  const CATEGORY_ID = "f6e7591c-6743-432d-992b-c3bff746848d";

  const handleAddToCart = (product) => {
    props.addToCart(product)
  }
  
  const handleRemoveFromCart = (id) => {
    props.removeFromCart(id)
  }

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
      <div className="ExteriorCeiling">
        <div className="ExteriorCeiling_Container Container">
          <Breadcrumbs 
            categories={props.categories}
            id={CATEGORY_ID}
          />
          <SortProducts />
          <ul className="ExteriorCeiling_List" >
            { props.products.length !== 0 ? 
              props.products.filter((product => product.categoryId === "f6e7591c-6743-432d-992b-c3bff746848d"))
                .map((product) => (
                  <li className="ExteriorCeiling_Item" key={product.id}>
                     {
                      props.cart.find(item => item.id === product.id) ?
                        <button
                          className='ExteriorCeiling_Item_Button'
                          alt='symbol'
                          onClick={() => handleRemoveFromCart(product.id)}
                        >
                          <img src={removeIcon} alt="remove" />
                        </button> :
                        <button
                          className='ExteriorCeiling_Item_Button'
                          alt='symbol'
                          onClick={() => handleAddToCart(product)}
                        >
                          <img src={AddIcon} alt="add" />
                        </button>
                    }
                    <img className="ExteriorCeiling_Img" src={`https://morgan-shop.herokuapp.com${product.image}`} alt="" />
                    <div className="ExteriorCeiling_Box">
                      <p className="ExteriorCeiling_Name">{product.name}</p>
                      <p className="ExteriorCeiling_Price">{product.price ? `£` + parseFloat(product.price).toFixed(2) : null}</p>
                    </div>
                  </li>
                )) : 
                props.fetchProducts()
            }
          </ul>
        </div>
      </div>
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ExteriorCeiling);