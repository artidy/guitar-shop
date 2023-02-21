import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { store } from './store';
import App from './components/app/app';
import { fetchProducts } from './store/products-data/api-actions';
import { checkAuth } from './store/user-data/api-actions';
import { getToken } from './services/token';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const token = getToken();

if (token) {
  store.dispatch(checkAuth());
}

store.dispatch(fetchProducts());

root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  //</React.StrictMode>
);
