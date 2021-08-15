import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addMessage, addPost } from './redux/state';

export const renderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
};
