import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.content}>
        <img src="https://get.wallhere.com/photo/trees-landscape-mountains-lake-nature-reflection-national-park-wilderness-mountain-meadow-reservoir-tarn-loch-mountainous-landforms-mountain-range-142717.jpg" alt="No pic" />
      </div>

      <div>
        ava + description
      </div>
    </div>
  )
}
export default ProfileInfo;
