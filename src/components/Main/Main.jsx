import React from 'react';

import SortProducts from "../SortProducts/SortProducts";
import Products from "../Products/Products.jsx";

import "./Main.styles.scss";

const Main = () => {
  return (
    <main className="Main">
      <div className="Main_Container">
        <SortProducts /> 
        <Products />
      </div>
    </main>
  );
};

export default Main;