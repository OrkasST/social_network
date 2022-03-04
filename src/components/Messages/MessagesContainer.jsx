import React from 'react';
import { connect } from 'react-redux';
import { selectDialog_AC } from '../../redux/messages_reducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
  return {
    selectedDialog: state.messagesPage.selectedDialog
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;