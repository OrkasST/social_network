import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../common/hoc/AuthCheck';
import withURLCheck from '../common/hoc/withURLCheck';
import Messages from './Messages';



class MessagesContainer extends React.Component {
  render() {
    return (
      <Messages {...this.props} />
    )
  }
}

let mapStateToProps = (state) => { return { } }

export default compose(
  withAuthRedirect,
  withURLCheck('/dialogs/:dialogId/'),
  connect(mapStateToProps)
)(MessagesContainer);

// let AuthRedirectComponent = withAuthRedirect(MessagesContainer);
// let MessagesMatch = withURLCheck('/dialogs/:dialogId/');
// export default connect(mapStateToProps)(MessagesMatch);