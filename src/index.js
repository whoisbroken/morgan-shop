import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from "./redux/store";

import App from './components/App/App';

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HashRouter>
    </Provider>,
  document.getElementById('root')
);

