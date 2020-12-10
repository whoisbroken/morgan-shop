import React from 'react';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import TableLamps from "./components/TableLamps/TableLamps";
import Products from './components/Products/Products';


const Routes = () => {
  return ( 
    <Switch>
      <Route path="/table-lamps">
        <TableLamps />
      </Route>
      <Route path="/floor-lamps">
        Floor lamps
      </Route>
      <Route path="/exterior-ceiling">
        Exterior ceiling
      </Route>
      <Route path="/interior-ceiling">
        Interior ceiling
      </Route>
      <Route path="/">
        <main className="Main">
          <div className="Main_Container Container">
            <NavLink className="TableLamps" to="/table-lamps">Table lamps</NavLink>
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
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Route>
    </Switch>
  );
};

export default Routes;