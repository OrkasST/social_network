import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

export const renderApp = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  );
  reportWebVitals();
};

renderApp(store);

store.subscribe(renderApp);
