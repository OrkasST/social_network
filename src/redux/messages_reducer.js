const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SELECT_DIALOG = 'SELECT-DIALOG';

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
    [],
    [
      { id: '1.1', text: 'Hi!' },
      { id: '1.2', text: 'How are you?' },
      { id: '2.3', text: 'Hi :)' },
      { id: '2.4', text: 'I\'m fine!\nWhat about you?' },
      { id: '1.5', text: 'I\'m Ok :) Thanks' },
      { id: '1.6', text: 'What do u do today evening' },
      { id: '1.7', text: 'Yo! Are u here?' }
    ],
    [
      { id: '1.1', text: 'Hello!' },
      { id: '1.2', text: 'How are you?' },
      { id: '2.3', text: 'What do you want?' },
      { id: '1.4', text: 'I\'m Ok, thanks )' },
      { id: '1.5', text: 'What do u do today evening' },
      { id: '1.6', text: 'Yo! Are u here?' }
    ]
  ],
  newMessageText: '',
  selectedDialog: 0
};

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let lastId = Number(state.messagesData[state.selectedDialog][state.messagesData[state.selectedDialog].length - 1].id.split('.')[1]);
      let Message = {
        id: `2.${lastId + 1}`,
        text: state.newMessageText
      }
      return {
        ...state,
        messagesData: state.messagesData.map((ms, i) => i === state.selectedDialog ? [...ms, Message] : ms),
        newMessageText: ''
      }
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText
      }
    }

    case SELECT_DIALOG: {
      console.log(action.id);
      return {
        ...state,
        selectedDialog: action.id
      }
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

export const selectDialog_AC = (id) => {
  return {
    type: SELECT_DIALOG,
    id
  }
}