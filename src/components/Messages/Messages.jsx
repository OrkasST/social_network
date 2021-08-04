import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import MessageBlock from './MessageBlock/MessageBlock';
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

  return (
    <div className={s.dialogs}>
      <MessageBlock data={messagesData} />
      <Dialogs data={dialogsData} />
    </div>
  )
}

export default Messages;
