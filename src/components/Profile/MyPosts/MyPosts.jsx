import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      <h3>
        My posts
      </h3>
      <div>
        <textarea></textarea>
        <br />
        <button>Add new post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hello world!' likes='0' />
        <Post  likes='0' />
        <Post  likes='0' />
        <Post  likes='0' />
      </div>
    </div>
  )
}
export default MyPosts;
