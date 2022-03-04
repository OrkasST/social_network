import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = props.data.map( post =>
    <Post text={ post.text } likesCount={ post.likesCount } key={post.id} />
  );

  let newPostElem = React.createRef();

  const addPost = () => {
    props.addPost();
  }

  const updateNewPostText = () => {
    let text = newPostElem.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.wrapper}>
      <h3>
        My posts
      </h3>
      <div className={s.newPostEnter}>
        <textarea
          placeholder='Enter your text...'
          onChange={ updateNewPostText } 
          ref={ newPostElem } 
          value={ props.newPostText } />
        <button onClick={ addPost } >Add new post</button>
      </div>
      <div className={ s.posts }>
        { posts }
      </div>
    </div>
  )
}
export default MyPosts;
