import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={`${s.header}`}>
      <div>
        <NavLink to='/'>
          <img src="https://pngpress.com/wp-content/uploads/2020/08/uploads_dragon_dragon_PNG84452.png" alt="" />
          <span className={s.red}>RED DRAGON</span>
        </NavLink>
      </div>
      <div className={s.authBlock} >
        <span>{
          props.isAuthorised ? props.userName
            : <NavLink to='/login'>Log In</NavLink>
        }</span>
      </div>
    </header>
  )
}
export default Header;
