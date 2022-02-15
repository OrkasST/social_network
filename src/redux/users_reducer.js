const SHOW_MORE = 'SHOW-MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
  users: [
    { id: 1, name: 'Michael', photoUrl: 'https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png',
      followed: false, status: 'Traveling is in my soul', location : {country: 'USA', city: 'New York'} },
    { id: 2, name: 'Alexey', photoUrl: 'https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png',
      followed: false, status: 'Sleeeeep....', location : {country: 'Belarus', city: 'Brest'} },
    { id: 3, name: 'Voitech', photoUrl: 'https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png',
      followed: true, status: 'Dzien dobry, panove', location : {country: 'Poland', city: 'Wrotslaw'} },
    { id: 4, name: 'Oleg', photoUrl: 'https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png',
      followed: false, status: 'Hey evryone!', location : {country: 'Ukraine', city: 'Kiev'} },
    { id: 5, name: 'Georgiy', photoUrl: 'https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png',
      followed: true, status: 'I am a KING!', location : {country: 'Russia', city: 'Moscow'} }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
      }

    case SHOW_MORE:
      return state;

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }

    default:
      return state;
  }
}

export default usersReducer;

export const showMoreAC = () => {
  return {
    type: SHOW_MORE
  }
}

export const followAC = (userId) => { return { type: FOLLOW, userId } };
export const unfollowAC = (userId) => { return { type: UNFOLLOW, userId } };
export const setUsersAC = (users) => { return { type: SET_USERS, users } };
