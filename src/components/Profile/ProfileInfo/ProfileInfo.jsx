import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user-man.png'

const ProfileInfo = (props) => {
  if (!props.userProfile) return <Preloader />
  let imgSrc = props.userProfile.photos.large ? props.userProfile.photos.large : userPhoto;
  return (
    <div>
      <div className={s.content}>
        <img src="https://get.wallhere.com/photo/trees-landscape-mountains-lake-nature-reflection-national-park-wilderness-mountain-meadow-reservoir-tarn-loch-mountainous-landforms-mountain-range-142717.jpg" alt="No pic" />
      </div>
      <br/>

      <div className={s.userInfo}>
        <div>
          <b>{props.userProfile.fullName}</b>
        </div><br/><br/>
        <img src={ imgSrc } alt='user Avatar' /><br/><br/>
        <div><b>Status: </b>{props.userProfile.aboutMe}</div>
        {props.userProfile.lookingForAJob ? <div><b>Finding job:</b> {props.userProfile.lookingForAJobDescription}</div> : <></>}
        <div>
          <b>Contacts: </b>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo;
