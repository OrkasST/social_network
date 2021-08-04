import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import MessageBlock from './MessageBlock/MessageBlock';
import s from './Messages.module.css';

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <Dialogs data={props.data.dialogsData} />
      <MessageBlock data={props.data.messagesData} />
    </div>
  )
}

export default Messages;
