import React from 'react';
import { NavLink } from "react-router-dom";

import "./Main.scss";
import Products from '../Products/Products';

const Main = () => {
  return (
    <>
      <main className="Main">
          <div className="Main_Container Container">
            <NavLink className="TableLamps" to="/table-lamps">
              <h3 className="Main_Category_Title">Table lamps</h3>
            </NavLink>  
            <NavLink className="FloorLamps" to="/floor-lamps">floor lamps</NavLink>
            <NavLink className="ExteriorCeiling" to="/exterior-ceiling">exterior ceiling</NavLink>
            <NavLink className="InteriorCeiling" to="/interior-ceiling">interior ceiling</NavLink>
          </div>
        </main>
        <section>
          <div className="Container">
            <div>Sort by</div>
            <Products />
          </div>
        </section>
    </>
  );
};

export default Main;