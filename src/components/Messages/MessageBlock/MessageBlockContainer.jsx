import React from 'react';
import {connect} from 'react-redux';
import { sendMessage, updateNewMessageText } from '../../../redux/messages_reducer';
import MessageBlock from './MessageBlock';


let mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText,
    data: state.messagesPage.messagesData,
    selectedDialog: state.messagesPage.selectedDialog
  }
}

const MessageBlockContainer = connect(mapStateToProps, { updateNewMessageText, sendMessage })(MessageBlock);

export default MessageBlockContainer;