import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';

import TopBar from '../TopBar/TopBar.jsx';
import Routes from '../../Routes';
import ScrollToTop from "../../utils/ScrollToTop";
import { fetchProducts, fetchCategories } from '../../redux/actions/action';
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./App.scss";


class App extends Component {  
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state)
        });
      }

      this.setState({ currentUser: userAuth })
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
        <TopBar currentUser={this.state.currentUser}/>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

