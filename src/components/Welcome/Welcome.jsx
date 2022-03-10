import React from "react";
import s from './Welcome.module.css';

const Welcome = (props) => {
    return <div className={s.wrapper}>
        Welcome to <span className={s.red}>Red Dragon</span>!
    </div>
}

export default Welcome;