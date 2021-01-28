import React from 'react';

import SortProducts from "../SortProducts/SortProducts";
import ProductsList from "../ProductsList/ProductsList.jsx";

const Products = ({ id }) => {
  return (
    <div>
      <SortProducts /> 
      <ProductsList categoryId={id} />
    </div>
  );
};


export default Products;