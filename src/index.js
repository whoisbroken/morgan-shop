import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { HashRouter } from "react-router-dom";

import App from './components/App/App';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </Provider>
  </HashRouter>,
  document.getElementById('root')
);

