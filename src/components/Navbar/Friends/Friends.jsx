import React from 'react';
import FriendLink from './FriendLink/FriendLink';
import s from './Friends.module.css';

const Friends = (props) => {
  let friends = props.friendList.map( (friend, i) => {
    if (i <= 2) {
      return <FriendLink data={friend} />
    }
  });
  return (
    <div className={`${s.friendsWrapper}`}>
      {friends}
    </div>
  )
}
export default Friends;
