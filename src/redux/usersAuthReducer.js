import {usersAPI as usersApi} from "../api/api";
import {stopSubmit} from "redux-form";

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
        ...action.payLoad
      };
    case IS_AUTH:
      return {}

    default:
      return state;
  }
};

//action creator
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USERS_AUTH, payLoad: {userId, email, login, isAuth}});

// thunk middleware
export const getUserAuth = () => {
  return (dispatch) => {
   return usersApi.getAuth()
      .then(response => {
        const {id, email, login} = response.data;
        if (response.resultCode === 0){
          dispatch(setAuthUserData(id,email,login, true))
        }
      })
  }

};
export const login = (email, password, rememberMe) => {

  return (dispatch) => {
    usersApi.login(email, password, rememberMe)
      .then(response => {

        if (response.data.resultCode === 0){
          dispatch(getUserAuth());

        } else {

          let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
          dispatch(stopSubmit("login", {_error: message}));
        }
      })
  }
};
export const logout = () => {
  return (dispatch) => {
    usersApi.logout()
      .then(response => {
        if (response.data.resultCode === 0){
          dispatch(setAuthUserData(null,null,null, false))
        }
      })
  }
};

export default usersAuthReducer;
