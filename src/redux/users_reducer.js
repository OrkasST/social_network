import { UserAPI } from "../api/api";

const SHOW_MORE = 'SHOW-MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  inProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
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

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        inProgress: action.isFetching ?
          [...state.inProgress, action.id]
          : state.inProgress.filter(id => id !== action.id)
      }

    default:
      return state;
  }
}

export default usersReducer;

export const showMore = () => { return { type: SHOW_MORE } }
export const followSucsess = (userId) => { return { type: FOLLOW, userId } };
export const unfollowSucsess = (userId) => { return { type: UNFOLLOW, userId } };
export const setUsers = (users) => { return { type: SET_USERS, users } };
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } };
export const setTotalUsersCount = (totalUsersCount) => { return { type: SET_TOTAL_COUNT, totalUsersCount } };
export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } };
export const toggleFollowingProgress = (isFetching, id) => { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id } };


export const getUsers = (pageSize, pageNumber) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  UserAPI.getUsers(pageSize, pageNumber)
    .then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
}

export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  // UserAPI.follow(userId).then(response => {
  setTimeout(() => {
    dispatch(toggleFollowingProgress(false, userId));
    dispatch(followSucsess(userId));
  }, 300);
  // })
}

export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  // UserAPI.follow(userId).then(response => {
  setTimeout(() => {
    dispatch(toggleFollowingProgress(false, userId));
    dispatch(unfollowSucsess(userId));
  }, 300);
  // })
}