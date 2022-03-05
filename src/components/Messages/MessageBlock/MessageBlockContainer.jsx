import React from 'react';
import {connect} from 'react-redux';
import { useMatch } from 'react-router-dom';
import { sendMessage, updateNewMessageText } from '../../../redux/messages_reducer';
import MessageBlock from './MessageBlock';

class MessageBlockContainer extends React.Component {
  render () {
    return <MessageBlock {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText,
    data: state.messagesPage.messagesData
  }
}

export default connect(mapStateToProps, { updateNewMessageText, sendMessage })(MessageBlockContainer);