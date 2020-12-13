import React from 'react';

import "./ProductsList.scss";
import AddIcon from "../../images/add.svg";

const ProductList = ({ products }) => {
  return (
    <ul className="ProductList_List" >
      {products ?
      products.map(product => {
        return (
        
          <li className="ProductList_Item" key={product.id}>
          {
            
          // props.isBasket ?
          // <ButtonIcon clazz='Product-Button' img={remove} alt='Remove item' /> :
          <button className='ProductList_Button'  alt='Add item'>
            <img src={AddIcon} alt="add"/>
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