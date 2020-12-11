import React from 'react';
import { Switch, Route } from "react-router-dom";

import TableLamps from "./components/TableLamps/TableLamps";
import FloorLamps from "./components/FloorLamps/FloorLamps";
import Main from './components/Main/Main';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';


const Routes = () => {
  return ( 
    <Switch>
      <Route path="/table-lamps">
        <TableLamps />
      </Route>
      <Route path="/floor-lamps">
        <FloorLamps />
      </Route>
      <Route path="/exterior-ceiling">
        Exterior ceiling
      </Route>
      <Route path="/interior-ceiling">
        Interior ceiling
      </Route>
      <Route path="/login">
        login
      </Route>
      <Route path="/cart">
        cart
      </Route>
      <Route path="/">
        <Main />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;