import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext';

export const renderApp = (state) => {
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

renderApp(store.getState());

store.subscribe(() => {
  renderApp(store.getState());
});
