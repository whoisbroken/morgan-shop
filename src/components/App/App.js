import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';

import Routes from '../../Routes';
import TopBar from '../TopBar/TopBar.jsx';
import ScrollToTop from "../../utils/ScrollToTop";

import { fetchProducts, fetchCategories, setCurrentUser } from '../../redux/actions/action';
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./App.scss";


class App extends Component {  

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser(userAuth); 
    });

    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();  
  }
  
  render() {
  return (
      <Router>
        <ScrollToTop />
        <TopBar />
        <Routes />
      </Router>
  );     
 }
}

const mapStateToProps = (state) => ({
  products: state.data.products,
  categories: state.data.categories,
  cart: state.cart,
  sortProducts: state.sortProducts.sortBy,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCategories: () => dispatch(fetchCategories()),
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

