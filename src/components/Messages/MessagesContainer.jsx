import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import MessageBlockContainer from './MessageBlock/MessageBlockContainer';
import s from './Messages.module.css';

const MessagesContainer = (props) => {
  return (
    <div className={s.dialogs}>
      <Dialogs />
      <MessageBlockContainer />
    </div>
  )
}

export default MessagesContainer;