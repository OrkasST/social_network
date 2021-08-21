let store = {
  _state: {
    messagesData: {
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
      newMessageText: 'Hi!'
    },
    profileData: {
      postsData: [
        { id: 1, text: 'Hello world!', likesCount: 11 },
        { id: 2, text: 'My first posts...', likesCount: 12 },
        { id: 3, text: 'Hello guys!', likesCount: 9 },
        { id: 4, text: 'Yo! I love life!', likesCount: 5 }
      ],
      newPostText: 'Hello World!'
    },
    newsData: {

    },
    musicData: {

    },
    settingsData: {

    },
    navbarData: {
      friendList: [
        { id: 1, name: 'Andry', ava: 'https://thumbs.dreamstime.com/b/african-american-black-man-face-over-grey-background-89747920.jpg' },
        { id: 2, name: 'Mary', ava: 'https://s.zefirka.net/images/2015-10-01/20-samyx-krasivyx-aktris-gollivuda-po-versii-google/20-samyx-krasivyx-aktris-gollivuda-po-versii-google-7.jpg' },
        { id: 3, name: 'Alex', ava: 'https://i.pinimg.com/736x/d0/a4/cc/d0a4cc9ede8bc280e2eb0b3ceac62dfc.jpg' },
        { id: 4, name: 'Mark', ava: 'https://jooinn.com/images/man39s-face-11.jpg' },
        { id: 5, name: 'Adel', ava: 'https://i.pinimg.com/originals/87/63/93/8763935ad82267a1e102e253806e9323.jpg' },
        { id: 6, name: 'Christine', ava: 'https://i.pinimg.com/736x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg' }
      ]
    }
  },
  _callSubscriber() {
    //...
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    let type = action.type;
    if (type === 'ADD-POST') {
      let posts = this._state.profileData.postsData;
      let Post = {
        id: posts[posts.length - 1].id + 1,
        text: this._state.profileData.newPostText,
        likesCount: 0
      }

      posts.push(Post);
      this._state.profileData.newPostText = '';
      this._callSubscriber(this);
    } else if(type === 'UPDATE-POST-TEXT') {
      this._state.profileData.newPostText = action.newText;
      this._callSubscriber(this);
    } else if(type === 'ADD-MESSAGE') {
      let messages = this._state.messagesData.messagesData;
      let Message = {
        id: 0,
        text: this._state.messagesData.newMessageText
      }
  
      messages.push(Message);
      this._state.messagesData.newMessageText = '';
      this._callSubscriber(this);
    } else if(type === 'UPDATE-MESSAGE-TEXT') {
      this._state.messagesData.newMessageText = action.newText;
      this._callSubscriber(this);
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;
