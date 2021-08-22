import React from 'react';
import { addPost_ActionCreator, updateNewPostText_ActionCreator } from '../../../redux/profile_reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = props.data.map( post =>
    <Post text={post.text} likesCount={post.likesCount} />
  );

  let newPostElem = React.createRef();

  const addPost = () => {
    props.dispatch( addPost_ActionCreator() );
  }

  const updatePostText = () => {
    let text = newPostElem.current.value;
    props.dispatch( updateNewPostText_ActionCreator(text) );
  }

  return (
    <div>
      <h3>
        My posts
      </h3>
      <div>
        <textarea
          placeholder='Enter your text...'
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
