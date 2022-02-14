import React from 'react';
import StoreContext from '../../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();
        let data = state.messagesPage.dialogsData;

        return (
          <Dialogs data={data} />
        )
      }  
    }</StoreContext.Consumer>
  )
}

export default DialogsContainer;