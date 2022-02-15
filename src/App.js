import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import MessagesContainer from './components/Messages/MessagesContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className='app-content-wrapper'>
        <Routes>
          <Route path='/profile' element={ <Profile />} />
          <Route path='/dialogs' element={ <Messages />} />
          <Route path='/news' element={ <News />} />
          <Route path='/music' element={ <Music />} />
          <Route path='/settings' element={ <Settings />} />
        </Routes>
      </div>
    </div>
  )
}
export default App;
