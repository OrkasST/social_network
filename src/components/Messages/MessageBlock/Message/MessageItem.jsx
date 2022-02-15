import React from 'react';
import s from './MessageItem.module.css';

const MessageItem = (props) => {
  return (
        <div className={s.message + ' ' + (props.data.id >= 2 ? s._right : s._left)}>{props.data.text}</div>
  )
}

export default MessageItem;
