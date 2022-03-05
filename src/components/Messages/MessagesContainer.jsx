import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Messages from './Messages';



class MessagesContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Messages {...this.props} />
    )
  }
}

let MessagesMatch = (props) => {
  let match = useMatch('/dialogs/:dialogId/');
  return (
    <MessagesContainer {...props} match={match} />
  )
}

let mapStateToProps = (state) => { return {} }

export default connect(mapStateToProps)(MessagesMatch);