import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';
import { setUserProfile } from '../../redux/profile_reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount () {
        console.log(this.props);
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                console.log(response);
                this.props.setUserProfile(response.data);
            })
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
        userProfile: state.profilePage.userProfile
    }
}

export default connect(mapStateToProps, { setUserProfile } )(ProfileMatch);