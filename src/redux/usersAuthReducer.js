import {usersAPI as usersApi} from "../api/api";

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
      return {}

    default:
      return state;
  }
};

//action creator
export const setAuthUserData = (userId, email, login) => ({type: SET_USERS_AUTH, data: {userId, email, login}});

// thunk middleware
export const getUserAuth = () => {
  return (dispatch) => {
    usersApi.getAuth()
      .then(response => {
        const {id, email, login} = response.data;
        if (response.resultCode === 0){
          dispatch(setAuthUserData(id,email,login))
        } else alert(response.messages);
      })
  }
};

export default usersAuthReducer;
