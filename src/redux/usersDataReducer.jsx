const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const SET_PRELOADER = "SET_PRELOADER";
const TOGGLE_FOLLOW_PROGRESS = "TOGGLE_FOLLOW_PROGRESS";


let initialState = {
  users: [],
  pageSize: 9,
  userTotalCount: 0,
  currentPage: 1,
  isLoading: false,
  isToggleFollow: []
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
      return { ...state, isLoading: action.isLoading};
    case TOGGLE_FOLLOW_PROGRESS:
      return { ...state,
        isToggleFollow: action.isFetching
          ? [...state.isToggleFollow, action.userId]
          : state.isToggleFollow.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};

//action creator
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalCount});
export const preloader = (isLoading) => ({type: SET_PRELOADER, isLoading});
export const toggleFollowProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOW_PROGRESS, isFetching, userId});

export default usersDataReducer;
