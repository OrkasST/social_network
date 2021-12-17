import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar data={props.state.navbar} />
      <div className='app-content-wrapper'>
        <Route path='/profile' render={() => <Profile /* store={props.store} */ />} />
        <Route path='/dialogs' render={() => <Messages /* dialogsData={props.state.messagesPage.dialogsData} store={props.store} */ />} />
        {/* <Route path='/news' render={() => <News data={props.state.newsPage} />} /> */}
        {/* <Route path='/music' render={() => <Music data={props.state.musicPage} />} /> */}
        {/* <Route path='/settings' render={() => <Settings data={props.state.settingsPage} />} /> */}
      </div>
    </div>
  )
}
export default App;
