import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getUserProfile } from '../../redux/profile_reducer';
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

const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<ProfileContainer {...props} match={match} />
	)
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        userId: state.authData.id,
        isAuthorised: state.authData.isAuthorised
    }
}

export default connect(mapStateToProps, { getUserProfile } )(ProfileMatch);