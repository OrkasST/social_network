import React from "react";
import { NavLink } from "react-router-dom";
import s from './Welcome.module.css';

const Welcome = (props) => {
    return <div className={s.wrapper}>
        <div><u>Welcome to <span className={s.red}>Red Dragon</span>!</u></div>
        <div className={s.buttons}>
            <div>
                <NavLink to='/login'>Log In</NavLink>
            </div>
            <div>
                <NavLink to='/'>Sign UP</NavLink>
            </div>
        </div>
    </div>
}

export default Welcome;