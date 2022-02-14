import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import DialogsContainer from './Dialogs/DialogsContainer';
import MessageBlockContainer from './MessageBlock/MessageBlockContainer';
import s from './Messages.module.css';

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <DialogsContainer />
      <MessageBlockContainer />
    </div>
  )
}

export default Messages;