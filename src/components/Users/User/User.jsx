import React from 'react';
import s from './User.module.css'
import userManPhoto from '../../../assets/images/user-man-2.png';
import { NavLink } from 'react-router-dom';


const User = (props) => {
    return (
        <div className={s.wrapper} >
            <span>
                <div>
                    <NavLink to={`/profile/${props.user.id}`}><img src={props.user.photos.small ? props.user.photos.small : userManPhoto} alt="avatar" className={s.userPhoto} /></NavLink>
                </div>
                <div>
                    {
                        props.user.followed ?
                            <button onClick={() => props.unfollow(props.user.id)} >Unfollow</button>
                            : <button onClick={() => props.follow(props.user.id)} >Follow</button>

                    }
                </div>
            </span>
            <span className={s.wrapper} >
                <span className={s.text} >
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span className={s.text} >
                    <div>{props.user.location ? props.user.location.country + ',' : 'My country,'}</div>
                    <div>{props.user.location ? props.user.location.city : 'My city'}</div>
                </span>
            </span>
        </div>
    )
}

export default User;