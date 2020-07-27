const SET_USERS_AUTH = "SET_USERS_AUTH";
const IS_AUTH = "IS_AUTH";


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

let usersAuthReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USERS_AUTH:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    case IS_AUTH:
      return {
        ...state, isAuth: action.status
      };
    default:
      return state;
  }
};

//action creator
export const setAuthUserData = (userId, email, login) => ({type: SET_USERS_AUTH, data: {userId, email, login}});

export default usersAuthReducer;