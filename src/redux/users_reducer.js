const SHOW_MORE = 'SHOW-MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';


let initialState = {
  users: [ ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
        users: [...action.users]
      }
    
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
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
export const setCurrentPageAC = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } };
export const setTotalUsersCountAC = (totalUsersCount) => { return { type: SET_TOTAL_COUNT, totalUsersCount } };
