import React from 'react';
import { Switch, Route } from "react-router-dom";

import TableLamps from "./components/TableLamps/TableLamps";
import FloorLamps from "./components/FloorLamps/FloorLamps";
import ExteriorCeiling from "./components/ExteriorCeiling/ExteriorCeiling";
import InteriorCeiling from "./components/InteriorCeiling/InteriorCeiling";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Cart from "./components/Cart/Cart";
import ResetPassword from "./components/ResetPassword/ResetPassword";
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
        <ExteriorCeiling />
      </Route>
      <Route path="/interior-ceiling">
        <InteriorCeiling />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/reset-pass">
        <ResetPassword />
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