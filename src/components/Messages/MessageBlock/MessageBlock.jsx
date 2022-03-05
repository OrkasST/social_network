import React from 'react';
import { sendMessage_ActionCreator, updateNewMessageText_ActionCreator } from '../../../redux/messages_reducer';
import MessageItem from './Message/MessageItem';
import s from './MessageBlock.module.css';

const MessageBlock = (props) => {

  let msgId = props.match ? props.match.params.dialogId : 0

  let messages = props.data[msgId] ? props.data[msgId].map(message => <MessageItem data={message} key={message.id} />) : ['no messages'];

  const onSendMessageClick = () => {
    props.sendMessage();
  }

  const onNewMessageTextUpdate = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }

  return msgId > 0 ? (
    <div className={s.wrapper} >
      <div className={s.dialogMessages}>
        {messages}
      </div>
      <div className={s.newMessage}>
        <textarea
          placeholder='Enter your message...'
          onChange={onNewMessageTextUpdate}
          value={props.newMessageText} />
          
        <button onClick={onSendMessageClick} >Send</button>
      </div>
    </div>
  ) : (
    <div className={s.dialogMessages}></div>
  )
}

export default MessageBlock;
