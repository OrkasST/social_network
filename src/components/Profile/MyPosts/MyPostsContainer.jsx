import React from 'react';
import { addPost_ActionCreator, updateNewPostText_ActionCreator } from '../../../redux/profile_reducer';
// import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


// const MyPostsContainer = () => {

//   return (
//     <StoreContext.Consumer>{ 
//       (store) => {
//         let state = store.getState();

//         const addPost = () => {
//           store.dispatch( addPost_ActionCreator() );
//         }
      
//         const updateNewPostText = (text) => {
//           store.dispatch( updateNewPostText_ActionCreator(text) );
//         }

//         return (<MyPosts 
//           addPost={ addPost } 
//           updateNewPostText={ updateNewPostText } 
//           data={ state.profilePage.postsData } 
//           newPostText={ state.profilePage.newPostText } 
//         />)
//       }
//     }</StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    data: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch( addPost_ActionCreator() );
    },
    updateNewPostText: (text) => {
      dispatch( updateNewPostText_ActionCreator(text) );
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;