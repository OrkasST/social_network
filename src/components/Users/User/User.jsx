import React from 'react';
import s from './User.module.css'

const User = (props) => {
    return (
        <div className={s.wrapper} >
            <span>
                <div>
                    <img src={props.user.photoUrl} alt="avatar" className={s.userPhoto} />
                </div>
                <div>
                    {
                        props.user.followed ?
                            <button onClick={ () => props.unfollow(props.user.id) } >Unfollow</button>
                            : <button onClick={ () => props.follow(props.user.id) } >Follow</button>
                            
                    }
                </div>
            </span>
            <span className={s.wrapper} >
                <span className={s.text} >
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span className={s.text} >
                    <div>{props.user.location.country + ','}</div>
                    <div>{props.user.location.city}</div>
                </span>
            </span>
        </div>
    )
}

export default User;