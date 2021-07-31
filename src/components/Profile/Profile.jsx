import React from 'react';
import MyPost from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={`${s.content}`}>
      <div>
        <img src="https://get.wallhere.com/photo/trees-landscape-mountains-lake-nature-reflection-national-park-wilderness-mountain-meadow-reservoir-tarn-loch-mountainous-landforms-mountain-range-142717.jpg" alt="No pic" />
      </div>

      <div>
        ava + description
      </div>
      <MyPost />
    </div>
  )
}
export default Profile;
