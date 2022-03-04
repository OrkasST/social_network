import React from 'react';
// import StoreContext from '../../../StoreContext';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { selectDialog_AC } from '../../../redux/messages_reducer';



// const sDialogsContainer = () => {

//   return (
//     <StoreContext.Consumer>{
//       (store) => {
//         let state = store.getState();
//         let data = state.messagesPage.dialogsData;

//         return (
//           <Dialogs data={data} />
//         )
//       }  
//     }</StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    data: state.messagesPage.dialogsData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    selectDialog: (id) => {
      dispatch(selectDialog_AC(id));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;