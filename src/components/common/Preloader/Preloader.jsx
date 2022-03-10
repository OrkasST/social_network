import React from 'react';
import s from './Preloader.module.css';
import loader from '../../../assets/images/Loader.svg';

const Preloader = (props) => {
    return <img src={loader} alt='loader' className={props.className} />
}

export default Preloader;