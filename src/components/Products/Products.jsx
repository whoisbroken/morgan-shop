import React from 'react';

import SortProducts from "../SortProducts/SortProducts";
import ProductsList from "../ProductsList/ProductsList.jsx";

const Products = () => {
  return (
    <div className="Products">
      <div className="Products_Container Container">
        <SortProducts /> 
        <ProductsList />
      </div>
    </div>
  );
};


export default Products;