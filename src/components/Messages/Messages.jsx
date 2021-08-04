import React from 'react';
import Dialog from './Dialog/Dialog';
import MessageItem from './Message/MessageItem';
import s from './Messages.module.css';

const Messages = (props) => {
  let dialogsData = [
    {id : 1, name : 'Andry'},
    {id : 2, name : 'Mary'},
    {id : 3, name : 'Alex'},
    {id : 4, name : 'Mark'},
    {id : 5, name : 'Adel'},
    {id : 6, name : 'Christine'}
  ];

  let messagesData = [
    {id : 1, text : 'Hi!'},
    {id : 2, text : 'How are you?'},
    {id : 3, text : 'What do u do today evening?'},
    {id : 4, text : 'Yo, are u here?'}
  ];

  let dialogs = dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
  let messages = messagesData.map(message => <MessageItem text={message.text} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogs }
      </div>

      <div className={s.dialogMessages}>
        { messages }
      </div>
    </div>
  )
}

export default Messages;
