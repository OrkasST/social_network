import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
  let postsData = [
    {id : 1, text : 'Hello world!', likesCount : 11},
    {id : 2, text : 'My first posts...', likesCount : 9},
    {id : 3, text : 'Hello guys!', likesCount : 1},
    {id : 4, text : 'Yo! I love life!', likesCount : 0}
  ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts data={postsData}/>
    </div>
  )
}
export default Profile;
