let initialState = {
    links: [
        {path: "/profile", name: "Profile", id: '1.1'},
        {path: "/dialogs", name: "Messages", id: '1.2'},
        {path: "/news", name: "News", id: '1.3'},
        {path: "/music", name: "Music", id: '1.4'},
        {path: "/settings", name: "Settings", id: '1.5'},
        {path: "/users", name: "Users", id: '1.6'}
    ],
    friendList: [
        { id: 2.1, name: 'Andry', ava: 'https://thumbs.dreamstime.com/b/african-american-black-man-face-over-grey-background-89747920.jpg' },
        { id: 2.2, name: 'Mary', ava: 'https://s.zefirka.net/images/2015-10-01/20-samyx-krasivyx-aktris-gollivuda-po-versii-google/20-samyx-krasivyx-aktris-gollivuda-po-versii-google-7.jpg' },
        { id: 2.3, name: 'Alex', ava: 'https://i.pinimg.com/736x/d0/a4/cc/d0a4cc9ede8bc280e2eb0b3ceac62dfc.jpg' },
        { id: 2.4, name: 'Mark', ava: 'https://jooinn.com/images/man39s-face-11.jpg' },
        { id: 2.5, name: 'Adel', ava: 'https://i.pinimg.com/originals/87/63/93/8763935ad82267a1e102e253806e9323.jpg' },
        { id: 2.6, name: 'Christine', ava: 'https://i.pinimg.com/736x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg' }
    ]
}

const navbarReducer = (state = initialState, action) => {


    return state;
}

export default navbarReducer;