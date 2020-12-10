import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {products?
      products.map(product => {
        return (
        <div key={product.id}>
          <img src={product.image} alt=""/>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
        )
      })
      : null}
    </div>
  );
};

export default ProductList;