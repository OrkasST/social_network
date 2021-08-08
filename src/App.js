import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar data={ props.state.navbarData } />
        <div className='app-content-wrapper'>
          <Route path='/profile' render={ () => <Profile data={ props.state.profileData } /> } />
          <Route path='/dialogs' render={ () => <Messages data={ props.state.messagesData } /> } />
          <Route path='/news' render={ () => <News data={ props.state.newsData } /> } />
          <Route path='/music' render={ () => <Music data={ props.state.musicData } /> } />
          <Route path='/settings' render={ () => <Settings data={ props.state.settingsData } /> } />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;
