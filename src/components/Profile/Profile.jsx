import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Navigate } from 'react-router-dom';

const Profile = (props) => {

  return (
    <div className={s.wrapper} >
      <ProfileInfo userProfile={props.userProfile} />
      <MyPostsContainer />
    </div>
  )
}
export default Profile;
