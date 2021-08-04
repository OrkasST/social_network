import React from 'react';
import MessageItem from './Message/MessageItem';
import s from './MessageBlock.module.css';

const MessageBlock = (props) => {

  let messages = props.data.map(message => <MessageItem text={message.text} />);

  return (
      <div className={s.dialogMessages}>
        { messages }
      </div>
  )
}

export default MessageBlock;
