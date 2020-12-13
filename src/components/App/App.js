import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';


import ScrollToTop from "../../utils/ScrollToTop";
import "./App.scss";
import { store } from "../../redux/store";
import TopBar from '../TopBar/TopBar.jsx';
import Routes from '../../Routes';

const App = () => {  
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
          <TopBar />
          <Routes />
      </Router>
    </Provider>
  );     
 }

 export default App;
