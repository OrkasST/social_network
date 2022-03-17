import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div className={s.wrapper} >
      <ProfileInfo userProfile={props.userProfile} profileStatus={props.profileStatus} updateProfileStatus={props.updateProfileStatus} />
      <MyPostsContainer />
    </div>
  )
}
export default Profile;
