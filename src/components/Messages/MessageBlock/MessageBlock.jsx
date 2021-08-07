import React from 'react';
import MessageItem from './Message/MessageItem';
import s from './MessageBlock.module.css';

const MessageBlock = (props) => {

  let messages = props.data.map(message => <MessageItem data={message} />);

  return (
      <div className={s.dialogMessages}>
        { messages }
      </div>
  )
}

export default MessageBlock;
