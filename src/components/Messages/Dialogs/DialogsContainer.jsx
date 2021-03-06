import React from 'react';
// import StoreContext from '../../../StoreContext';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';



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

let mapStateToProps = (state) => { return { data: state.messagesPage.dialogsData } }

const DialogsContainer = connect(mapStateToProps)(Dialogs)
export default DialogsContainer;