import React from 'react';
import s from './FriendLink.module.css';

const FriendLink = (props) => {
  return (
    <div className={s.friend} >
    <div className={s.friendAvaWrapper}>
      <img alt={props.data.name} src={props.data.ava} className={s.friendAvaImage}/>
    </div>
      { props.data.name } 
    </div>
  )
}
export default FriendLink;
