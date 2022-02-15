import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  let links = props.data.links.map(link => <NavLink to={link.path} className={ ({isActive}) => s.link + (isActive ? ` ${s.active}` : "")} >{link.name}</NavLink>)
  
  return (
    <nav className={`${s.nav}`}>
        {links}
      <Friends friendList={ props.data.friendList } />
    </nav>
  )
}
export default Navbar;
