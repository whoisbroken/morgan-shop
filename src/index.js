import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import Zoom from '@material-ui/core/Zoom';
import { SnackbarProvider } from 'notistack';

import { Provider } from 'react-redux';
import { store } from "./redux/store";

import App from './components/App/App';

ReactDOM.render(
    <Provider store={store}>   
      <SnackbarProvider 
        maxSnack={3} 
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      TransitionComponent={Zoom}
      >
        <HashRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </HashRouter> 
      </SnackbarProvider>
    </Provider>,
  document.getElementById('root')
);

