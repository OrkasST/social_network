const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, text: 'Hello world!', likesCount: 11 },
    { id: 2, text: 'My first posts...', likesCount: 12 },
    { id: 3, text: 'Hello guys!', likesCount: 9 },
    { id: 4, text: 'Yo! I love life!', likesCount: 5 }
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let posts = state.postsData;
      let Post = {
        id: posts[posts.length - 1].id + 1,
        text: state.newPostText,
        likesCount: 0
      }
      posts.push(Post);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
}

export default profileReducer;

export const addPost_ActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostText_ActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
