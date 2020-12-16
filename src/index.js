import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

