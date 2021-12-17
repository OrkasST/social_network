import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import MessageBlockContainer from './MessageBlock/MessageBlockContainer';
import s from './Messages.module.css';

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <Dialogs data={props.dialogsData} />
      <MessageBlockContainer 
        store={props.store}
        // data={props.data.messagesData}
        // newMessageText={props.data.newMessageText}
        // dispatch={props.dispatch} 
      />
    </div>
  )
}

export default Messages;