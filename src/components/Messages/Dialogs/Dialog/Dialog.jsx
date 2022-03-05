import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => s.dialog + (isActive ? ` ${s.active}` : '')}>
      <div className={s.dialogAva}>
        <img className={s.dialogAva_Image} src={props.ava} alt='dialog ava' />
      </div>
      <div className={s.dialogName}>
        {props.name || 'anonymos'}
      </div>
    </NavLink>
  )
}

export default Dialog;
