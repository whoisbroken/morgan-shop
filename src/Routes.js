import React from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategory } from "./redux/selectors/data.selectors";

import HomePage from "./pages/Homepage/Homepage.jsx";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Cart from "./components/Cart/Cart";
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.jsx';
import Products from './components/Products/Products.jsx';
import SortProducts from "./components/SortProducts/SortProducts";


const Routes = ({ categories }) => {
  return ( 
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={Cart} />
        {categories.map(category => {
          return (
            <Route path={`/${category.alias}`} key={category.id}>
              <section className="Category">
                <div className="Category_Container Container">
                  <Breadcrumbs category={category}/>
                  <SortProducts />
                  <Products />
                </div>
              </section>
            </Route>
          )
        })}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-pass">
          <ResetPassword />
        </Route>
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