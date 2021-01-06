import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import "./FloorLamps.scss";
import AddIcon from "../../images/add.svg"
import removeIcon from "../../images/remove.svg"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SortProducts from "../SortProducts/SortProducts";
import { fetchProducts, fetchCategories, addToCart, removeFromCart } from '../../redux/actions/action';


const FloorLamps = (props) => {

  const CATEGORY_ID = "66ef32ef-03ad-48c2-b295-bdfc018b5881";

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
      <div className="FloorLamps">
        <div className="FloorLamps_Container Container">
          <Breadcrumbs 
            categories={props.categories}
            id={CATEGORY_ID}
          />
          <SortProducts />
          <ul className="FloorLamps_List" >
            { props.products.length !== 0 ? 
              props.products.filter((product => product.categoryId === CATEGORY_ID))
                .map((product) => (

                  <li className="FloorLamps_Item" key={product.id}>
                     { 
                      props.cart.find(item => item.id === product.id) ?
                        <button
                          className='FloorLamps_Item_Button'
                          alt='symbol'
                          onClick={() => handleRemoveFromCart(product.id)}
                        >
                          <img src={removeIcon} alt="remove" />
                        </button> :
                        <button
                          className='FloorLamps_Item_Button'
                          alt='symbol'
                          onClick={() => handleAddToCart(product)}
                        >
                          <img src={AddIcon} alt="add" />
                        </button>
                    }
                    <img className="FloorLamps_Img" src={`https://morgan-shop.herokuapp.com${product.image}`} alt="" />
                    <div className="FloorLamps_Box">
                      <p className="FloorLamps_Name">{product.name}</p>
                      <p className="FloorLamps_Price">{+ product.price ? `£` + parseFloat(product.price).toFixed(2) : null}</p>
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
  addToCart: (product) => dispatch(addToCart(product)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FloorLamps);