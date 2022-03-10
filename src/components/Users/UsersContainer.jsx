import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users_reducer';
import Preloader from '../common/Preloader/Preloader';
import withAuthRedirect from '../common/hoc/AuthCheck';

class UsersComponent extends React.Component {

    componentDidMount() {
        if(this.props.users.length > 0) return;
        this.props.getUsers(this.props.pageSize, this.props.pageNumber)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.pageSize, pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader />
                : <></>}
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                inProgress={this.props.inProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        inProgress: state.usersPage.inProgress
    }
}

export default withAuthRedirect(connect(mapStateToProps, { getUsers, follow, unfollow, setCurrentPage, toggleFollowingProgress })(UsersComponent));