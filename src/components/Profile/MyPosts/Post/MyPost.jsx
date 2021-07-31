import React from 'react';
import s from './MyPost.module.css';

const MyPost = () => {
  return (
    <div>
      <div>
        My posts
      </div>
      <div>
        New post
      </div>
      <div className={s.item}>
        post 1
      </div>
      <div>
        post 2
      </div>
    </div>
  )
}
export default MyPost;
