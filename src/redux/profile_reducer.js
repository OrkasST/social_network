const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch(action.type) {
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