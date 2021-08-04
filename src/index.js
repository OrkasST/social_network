import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let data = {
  messagesData: {
    dialogsData: [
      { id: 1, name: 'Andry' },
      { id: 2, name: 'Mary' },
      { id: 3, name: 'Alex' },
      { id: 4, name: 'Mark' },
      { id: 5, name: 'Adel' },
      { id: 6, name: 'Christine' }
    ],

    messagesData: [
      { id: 1, text: 'Hi!' },
      { id: 2, text: 'How are you?' },
      { id: 3, text: 'What do u do today evening?' },
      { id: 4, text: 'Yo, are u here?' }
    ]
  },
  profileData: {
    postsData: [
      { id: 1, text: 'Hello world!', likesCount: 11 },
      { id: 2, text: 'My first posts...', likesCount: 9 },
      { id: 3, text: 'Hello guys!', likesCount: 1 },
      { id: 4, text: 'Yo! I love life!', likesCount: 0 }
    ]
  },
  newsData : {

  },
  musicData : {

  },
  settingsData : {

  }
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
