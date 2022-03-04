import React from 'react';
import { addPost, updateNewPostText } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    data: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPostText })(MyPosts);

export default MyPostsContainer;