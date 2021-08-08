import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  return (
    <nav className={`${s.nav}`}>
      <div>
        <NavLink to="/profile" activeClassName={s.active} >Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={s.active} >Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={s.active} >News</NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={s.active} >Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" activeClassName={s.active} >Settings</NavLink>
      </div>

      <Friends friendList={ props.data.friendList } />
    </nav>
  )
}
export default Navbar;
