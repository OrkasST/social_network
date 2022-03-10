import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import Welcome from './components/Welcome/Welcome';
import AuthCheck from './components/common/hoc/AuthCheck';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavbarContainer />
      <div className='app-content-wrapper'>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<MessagesContainer />} />
          <Route path='/news/*' element={<News />} />
          <Route path='/music/*' element={<Music />} />
          <Route path='/settings/*' element={<Settings />} />
          <Route path='/users/*' element={<UsersContainer />} />
          <Route path='/login/*' element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}
export default App;
