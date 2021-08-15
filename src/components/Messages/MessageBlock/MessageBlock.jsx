import React from 'react';
import MessageItem from './Message/MessageItem';
import s from './MessageBlock.module.css';

const MessageBlock = (props) => {

  let messages = props.data.map(message => <MessageItem data={message} />);
  let newMessageElem = React.createRef();
  const addMessage = () => {
    let text = newMessageElem.current.value;
    alert(text);
  }

  return (
      <div className={s.dialogMessages}>
        { messages }
        <div>
          <textarea ref={newMessageElem}></textarea>
          <button onClick={addMessage} >Send message</button>
        </div>
      </div>
  )
}

export default MessageBlock;
