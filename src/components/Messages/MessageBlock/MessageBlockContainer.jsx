import React from 'react';
import { sendMessage_ActionCreator, updateNewMessageText_ActionCreator } from '../../../redux/messages_reducer';
import StoreContext from '../../../StoreContext';
import MessageBlock from './MessageBlock';

const MessageBlockContainer = () => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();

        const sendMessage = () => {
          store.dispatch(sendMessage_ActionCreator());
        }

        const updateNewMessageText = (text) => {
          store.dispatch(updateNewMessageText_ActionCreator(text));
        }

        return (
          <MessageBlock
            updateNewMessageText={updateNewMessageText}
            sendMessage={sendMessage}
            newMessageText={state.messagesPage.newMessageText}
            data={state.messagesPage.messagesData}
          />
        )
      }
    }</StoreContext.Consumer>
  )
}

export default MessageBlockContainer;