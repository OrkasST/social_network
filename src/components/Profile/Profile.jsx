import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.wrapper} >
      <ProfileInfo />
      <MyPosts 
        data={props.data.postsData}
        newPostText={props.data.newPostText}
        dispatch={props.dispatch} />
    </div>
  )
}
export default Profile;
