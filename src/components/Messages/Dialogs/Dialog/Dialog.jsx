import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <div className={s.dialogAva}>
        <img className={s.dialogAva_Image} src={props.ava} alt='dialog ava' />
      </div>
      <NavLink to={`/dialogs/${props.id}`} activeclassname={s.active} onClick={() => props.selectDialog(props.id)}>
        {props.name || 'anonymos'}
      </NavLink>
    </div>
  )
}

export default Dialog;
