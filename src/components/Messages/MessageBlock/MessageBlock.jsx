import React from 'react';
import { sendMessage_ActionCreator, updateNewMessageText_ActionCreator } from '../../../redux/messages_reducer';
import MessageItem from './Message/MessageItem';
import s from './MessageBlock.module.css';

const MessageBlock = (props) => {

  let messages = props.data.map(message => <MessageItem data={message} key={message.id} />);

  const onSendMessageClick = () => {
    props.sendMessage();
  }

  const onNewMessageTextUpdate = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }

  return (
      <div className={s.dialogMessages}>
        { messages }
        <div>
          <textarea
            placeholder='Enter your message...'
            onChange={onNewMessageTextUpdate}
            value={props.newMessageText} />
          <button onClick={onSendMessageClick} >Send</button>
        </div>
      </div>
  )
}

export default MessageBlock;
