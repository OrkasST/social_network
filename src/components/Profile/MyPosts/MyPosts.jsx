import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = props.data.map( post =>
    <Post text={post.text} likesCount={post.likesCount} />
  );

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
        { posts }
      </div>
    </div>
  )
}
export default MyPosts;
