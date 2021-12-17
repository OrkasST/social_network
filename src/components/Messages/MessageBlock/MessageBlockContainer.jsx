import React from 'react';
import { sendMessage_ActionCreator, updateNewMessageText_ActionCreator } from '../../../redux/messages_reducer';
import MessageItem from './Message/MessageItem';
import MessageBlock from './MessageBlock';
import s from './MessageBlock.module.css';

const MessageBlockContainer = (props) => {

  let state = props.store.getState();

  const sendMessage = () => {
    props.store.dispatch( sendMessage_ActionCreator() );
  }

  const updateNewMessageText = (text) => {
    props.store.dispatch( updateNewMessageText_ActionCreator(text) );
  }

  return (
      <MessageBlock
        updateNewMessageText={ updateNewMessageText } 
        sendMessage={ sendMessage } 
        newMessageText={state.messagesPage.newMessageText} 
        data={state.messagesPage.messagesData}
      />
  )
}

export default MessageBlockContainer;