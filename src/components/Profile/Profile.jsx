import React from 'react';
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
      <div>
        My posts
      </div>
      <div>
        New post
      </div>
      <div>
        post 1
      </div>
      <div>
        post 2
      </div>

    </div>
  )
}
export default Profile;
