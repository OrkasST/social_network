import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsData = [
    {id : 1, text : 'Hello world!', likesCount : 11},
    {id : 2, text : 'My first posts...', likesCount : 9},
    {id : 3, text : 'Hello guys!', likesCount : 1},
    {id : 4, text : 'Yo!', likesCount : 0}
  ];

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
        <Post text={postsData[0].text} likesCount={postsData[0].likesCount} />
        <Post text={postsData[1].text} likesCount={postsData[1].likesCount} />
        <Post text={postsData[2].text} likesCount={postsData[2].likesCount} />
        <Post text={postsData[3].text} likesCount={postsData[3].likesCount} />
      </div>
    </div>
  )
}
export default MyPosts;
