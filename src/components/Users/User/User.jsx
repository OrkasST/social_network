import React from 'react';
import s from './User.module.css'
import userManPhoto from '../../../assets/images/user-man-2.png';
import { NavLink } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';


const User = (props) => {
    return (
        <div className={s.wrapper} >
            <span>
                <div>
                    <NavLink to={`/profile/${props.user.id}`}>
                        <img src={props.user.photos.small ? props.user.photos.small : userManPhoto} alt="avatar" className={s.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {
                        props.user.followed ?
                            <button disabled={props.inProgress.some(id => id === props.user.id)}
                                onClick={() => props.unfollow(props.user.id)} >{
                                    props.inProgress.some(id => id === props.user.id) ? <Preloader className={s.loader} /> : 'Unfollow'
                                }</button>

                            : <button disabled={props.inProgress.some(id => id === props.user.id)}
                                onClick={() => props.follow(props.user.id)} >{
                                    props.inProgress.some(id => id === props.user.id) ? <Preloader className={s.loader} /> : 'Follow'
                                }</button>
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