const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 4, text: 'Yo! I love life!', likesCount: 5 },
    { id: 3, text: 'Hello guys!', likesCount: 9 },
    { id: 2, text: 'My first posts...', likesCount: 12 },
    { id: 1, text: 'Hello world!', likesCount: 11 }
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let Post = {
        id: state.postsData[0].id + 1,
        text: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        postsData: [Post, ...state.postsData ],
        newPostText: ''
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }

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
