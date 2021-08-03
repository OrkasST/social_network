import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={s.dialog}>
          <NavLink to='/dialogs/1'>Andry</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Nick</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Anny</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Andrea</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/5'>Mikle</NavLink>
        </div>
      </div>

      <div className={s.dialogMessages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>What do u do today evening?</div>
      </div>
    </div>
  )
}

export default Messages;
