import React from 'react';
import MessageItem from './Message/MessageItem';
import s from './MessageBlock.module.css';

const MessageBlock = (props) => {

  let messages = props.data.map(message => <MessageItem data={message} />);
  let newMessageElem = React.createRef();

  const addMessage = () => {
    props.dispatch({ type : 'ADD-MESSAGE' });
  }

  const updateMessageText = () => {
    let text = newMessageElem.current.value;
    props.dispatch({ type : 'UPDATE-MESSAGE-TEXT', newText : text });
  }

  return (
      <div className={s.dialogMessages}>
        { messages }
        <div>
          <textarea
            onChange={updateMessageText}
            ref={newMessageElem}
            value={props.newMessageText} />
          <button onClick={addMessage} >Send message</button>
        </div>
      </div>
  )
}

export default MessageBlock;
