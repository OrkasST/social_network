import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = props.data.map( post =>
    <Post text={post.text} likesCount={post.likesCount} />
  );

  let newPostElem = React.createRef();
  const addPost = () => {
    let text = newPostElem.current.value;
    alert(text);
  }

  return (
    <div>
      <h3>
        My posts
      </h3>
      <div>
        <textarea ref={newPostElem}></textarea>
        <br />
        <button onClick={addPost} >Add new post</button>
      </div>
      <div className={s.posts}>
        { posts }
      </div>
    </div>
  )
}
export default MyPosts;
