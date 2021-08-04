import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogs = props.data.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);

  return (
    <div className={s.dialogItems}>
      {dialogs}
    </div>
  )
}

export default Dialogs;
