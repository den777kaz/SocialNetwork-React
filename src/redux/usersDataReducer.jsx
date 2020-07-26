const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const SET_PRELOADER = "SET_PRELOADER";

let initialState = {
  users: [],
  pageSize: 9,
  userTotalCount: 0,
  currentPage: 1,
  isFetching: false
};

let usersDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(u => {
          if(u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      };
    case SET_USERS:
      // return { ...state, users: [...state.users, ...action.users]}
      return { ...state, users: action.users};
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage};
    case SET_USERS_TOTAL_COUNT:
      return { ...state, userTotalCount: action.count};
    case SET_PRELOADER:
      return { ...state, isFetching: action.isFetching};
    default:
      return state;
  }
};

//action creator
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalCount});
export const preloaderAC = (isFetching) => ({type: SET_PRELOADER, isFetching});

export default usersDataReducer;
