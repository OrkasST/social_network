import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe, addMessage, addPost, updateMessageText, updatePostText } from './redux/state';

export const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
        addPost={addPost}
        addMessage={addMessage}
        updatePostText={updatePostText}
        updateMessageText={updateMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
};

renderApp();

subscribe(renderApp);