import React from 'react';
import { sendMessage_ActionCreator, updateNewMessageText_ActionCreator } from '../../../redux/store';
import MessageItem from './Message/MessageItem';
import s from './MessageBlock.module.css';

const MessageBlock = (props) => {

  let messages = props.data.map(message => <MessageItem data={message} />);

  const sendMessage = () => {
    props.dispatch( sendMessage_ActionCreator() );
  }

  const updateNewMessageText = (e) => {
    let text = e.target.value;
    props.dispatch( updateNewMessageText_ActionCreator(text) );
  }

  return (
      <div className={s.dialogMessages}>
        { messages }
        <div>
          <textarea
            placeholder='Enter your message...'
            onChange={updateNewMessageText}
            value={props.newMessageText} />
          <button onClick={sendMessage} >Send</button>
        </div>
      </div>
  )
}

export default MessageBlock;
