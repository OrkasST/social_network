import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
  userProfile: null,
  postsData: [
    { id: 4, text: 'Yo! I love life!', likesCount: 5 },
    { id: 3, text: 'Hello guys!', likesCount: 9 },
    { id: 2, text: 'My first posts...', likesCount: 12 },
    { id: 1, text: 'Hello world!', likesCount: 11 }
  ],
  profileStatus: null,
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
        postsData: [Post, ...state.postsData],
        newPostText: ''
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: { ...action.userProfile }
      }
    }

    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.status
      }

    default:
      return state;
  }
}

export default profileReducer;

export const addPost = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostText = (text) => { return { type: UPDATE_NEW_POST_TEXT, newText: text } }
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
  ProfileAPI.setProfile(userId).then(data => {
      dispatch(setUserProfile(data));
      dispatch(getProfileStatus(userId));
    })
}

export const getProfileStatus = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId).then( data => {
    dispatch(setProfileStatus(data));
  })
}
export const updateProfileStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then( data => {
    if (data.resultCode === 0) dispatch(setProfileStatus(status));
  })
}