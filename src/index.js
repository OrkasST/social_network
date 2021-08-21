import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import state, { subscribe, addMessage, addPost, updateMessageText, updatePostText } from './redux/state';
import store from './redux/store';

export const renderApp = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
};

renderApp(store);

store.subscribe(renderApp);
