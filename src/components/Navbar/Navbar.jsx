import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  return (
    <nav className={`${s.nav}`}>
      <div>
        <NavLink to="/profile" activeclassname={s.active} >Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeclassname={s.active} >Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" activeclassname={s.active} >News</NavLink>
      </div>
      <div>
        <NavLink to="/music" activeclassname={s.active} >Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" activeclassname={s.active} >Settings</NavLink>
      </div>

      <Friends friendList={ props.data.friendList } />
    </nav>
  )
}
export default Navbar;
