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
    {id : 4, text : 'Yo'}
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
        <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
        <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>

      <div className={s.dialogMessages}>
        <MessageItem text={messagesData[0].text} />
        <MessageItem text={messagesData[1].text} />
        <MessageItem text={messagesData[2].text} />
        <MessageItem text={messagesData[3].text} />
      </div>
    </div>
  )
}

export default Messages;
