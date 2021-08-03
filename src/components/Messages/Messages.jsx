import React from 'react';
import Dialog from './Dialog/Dialog';
import MessageItem from './Message/MessageItem';
import s from './Messages.module.css';

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <Dialog name='Andry' id='1' />
        <Dialog name='Mary' id='2' />
        <Dialog name='Alex' id='3' />
        <Dialog name='Mark' id='4' />
        <Dialog name='Adel' id='5' />
        <Dialog name='Christine' id='6' />
      </div>

      <div className={s.dialogMessages}>
        <MessageItem text='Hi!' />
        <MessageItem text='How are you?' />
        <MessageItem text='What do u do today evening?' />
      </div>
    </div>
  )
}

export default Messages;
