const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Andry', ava: 'https://thumbs.dreamstime.com/b/african-american-black-man-face-over-grey-background-89747920.jpg' },
    { id: 2, name: 'Mary', ava: 'https://s.zefirka.net/images/2015-10-01/20-samyx-krasivyx-aktris-gollivuda-po-versii-google/20-samyx-krasivyx-aktris-gollivuda-po-versii-google-7.jpg' },
    { id: 3, name: 'Alex', ava: 'https://i.pinimg.com/736x/d0/a4/cc/d0a4cc9ede8bc280e2eb0b3ceac62dfc.jpg' },
    { id: 4, name: 'Mark', ava: 'https://jooinn.com/images/man39s-face-11.jpg' },
    { id: 5, name: 'Adel', ava: 'https://i.pinimg.com/originals/87/63/93/8763935ad82267a1e102e253806e9323.jpg' },
    { id: 6, name: 'Christine', ava: 'https://i.pinimg.com/736x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg' }
  ],

  messagesData: [
    { id: 1, text: 'Hi!' },
    { id: 1, text: 'How are you?' },
    { id: 0, text: 'Hi :)' },
    { id: 0, text: 'I\'m fine!\nWhat about you?' },
    { id: 1, text: 'I\'m Ok :) Thanks' },
    { id: 1, text: 'What do u do today evening' },
    { id: 1, text: 'Yo! Are u here?' }
  ],
  newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];
      let messages = stateCopy.messagesData;
      let Message = {
        id: 0,
        text: stateCopy.newMessageText
      }
      messages.push(Message);
      stateCopy.newMessageText = '';
      return stateCopy;
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }

    default:
      return state;
  }
}

export default messagesReducer;

export const sendMessage_ActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}
export const updateNewMessageText_ActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}