import React from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategory } from "./redux/selectors/data.selectors";

import TableLamps from "./components/TableLamps/TableLamps";
import FloorLamps from "./components/FloorLamps/FloorLamps";
import ExteriorCeiling from "./components/ExteriorCeiling/ExteriorCeiling";
import InteriorCeiling from "./components/InteriorCeiling/InteriorCeiling";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./components/Cart/Cart";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Main from './components/Main/Main.jsx';
import Products from './components/Products/Products.jsx';
import HomePage from "./pages/Homepage/Homepage.jsx";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const Routes = ({ categories }) => {
  return ( 
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={Cart} />
        {categories.map(category => {
          return (
            <Route path={`/${category.alias}`} key={category.id}>
              <Products />
            </Route>
          )
        })}
        {/* <Route path="/table-lamps">
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
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-pass">
          <ResetPassword />
        </Route>
        {/* <Route exact path="/">
          <Main />
        </Route> */}
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategory,
})

export default connect(mapStateToProps)(Routes);