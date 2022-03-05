import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
        <div className={s.item}>
          <img className={s.ava} src='https://muzhskoy18.ru/files/avatars/no_avatar.jpg' alt='ava'/>
          {props.text || 'Some post text'}
          <div className={s.like}>
            <span>Like!</span>
            <span className={s.likes}>{ props.likesCount }</span>
          </div>
          <hr />
        </div>
  )
}
export default Post;
