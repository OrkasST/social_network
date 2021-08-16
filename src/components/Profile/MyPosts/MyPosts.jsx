import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = props.data.map( post =>
    <Post text={post.text} likesCount={post.likesCount} />
  );

  let newPostElem = React.createRef();

  const addPost = () => {
    props.addPost();
  }

  const updatePostText = () => {
    let text = newPostElem.current.value;
    props.updatePostText(text);
  }

  return (
    <div>
      <h3>
        My posts
      </h3>
      <div>
        <textarea
          onChange={updatePostText} 
          ref={newPostElem} 
          value={props.newPostText} />
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
