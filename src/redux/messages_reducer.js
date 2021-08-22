const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {

    switch(action.type) {
        case ADD_MESSAGE:
            let messages = state.messagesData;
            let Message = {
              id: 0,
              text: state.newMessageText
            }
            messages.push(Message);
            state.newMessageText = '';
            return state;
            
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
}

export default messagesReducer;