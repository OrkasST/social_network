import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from './StoreContext';
import { Provider } from "react-redux";

export const renderApp = () => {
  window.store = store;
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider >
    </BrowserRouter>,
    document.getElementById('root')
  );
  reportWebVitals();
};

renderApp();

// store.subscribe(() => {
//   renderApp(store.getState());
// });
