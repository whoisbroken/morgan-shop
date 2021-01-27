import React from 'react';

import SortProducts from "../SortProducts/SortProducts";
import ProductsList from "../ProductsList/ProductsList.jsx";

const Products = () => {
  return (
    <div>
      <SortProducts /> 
      <ProductsList />
    </div>
  );

};


export default Products;