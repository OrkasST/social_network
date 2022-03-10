import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserProfile } from '../../redux/profile_reducer';
import withAuthRedirect from '../common/hoc/AuthCheck';
import withURLCheck from '../common/hoc/withURLCheck';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount () {  
        let userId = this.props.match ? this.props.match.params.userId : this.props.userId;
        this.props.getUserProfile(userId);
    }

    render () {
        return <Profile {...this.props} />
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let ProfileMatch = withURLCheck(AuthRedirectComponent, "/profile/:userId/");

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        userId: state.authData.id
    }
}

export default compose(
    // withAuthRedirect, 
    withURLCheck("/profile/:userId/"), 
    connect(mapStateToProps, { getUserProfile })
)(ProfileContainer);

// export default connect(mapStateToProps, { getUserProfile } )(ProfileMatch);