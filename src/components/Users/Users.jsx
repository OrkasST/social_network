import React from 'react';
import User from './User/User';

const Users = (props) => {
    let users = props.users.map( u => <User user={u} key={u.id} follow={props.follow} unfollow={props.unfollow} /> )
    return (
        <div>
            {users}
        </div>
    )
}

export default Users;