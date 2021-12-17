import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';

export const renderApp = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store} >
      <App /* state={state} dispatch={store.dispatch.bind(store)} store={store} */ />
      </StoreContext.Provider >
    </BrowserRouter>,
    document.getElementById('root')
  );
  reportWebVitals();
};

renderApp(store.getState());

store.subscribe( () => {
  renderApp(store.getState());
} );
