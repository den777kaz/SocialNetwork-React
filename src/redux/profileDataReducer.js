import {profileAPI, usersAPI} from "../api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const SET_PROFILE_USERS = "SET_PROFILE_USERS";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

let initialState = {
  posts: [
    {id: 1, post: "hi", likes: 15},
    {id: 2, post: "hi, how are you?", likes: 7},
    {id: 3, post: "hi, how are you?", likes: 7}
  ],
  profile: null,
  status: ""
};

const profileDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = action.newPost;
      return {

        ...state,
        posts: [...state.posts, {id: Date.now(), post: newPost, likes: 0}]

      };
    case SET_PROFILE_USERS:
      return {
        ...state,
        profile: action.profile
      };
      case SET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
};

//action creator
export const addNewPostActionCreator = (newPost) => ({type: ADD_NEW_POST, newPost});
export const setProfileUsers = (profile) => ({type: SET_PROFILE_USERS, profile});
export const setStatus = (status) => ({type: SET_PROFILE_STATUS, status: status});

//thunk- middleware
export const getUserInfo = (userId) => {
  return (dispatch) => {
    usersAPI.getUserId(userId)
      .then(response => {
        dispatch(setProfileUsers(response));
      })
  }
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response));
      })
  }
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        console.log("######",response)
        if(response.data.resultCode === 0){
          dispatch(setStatus(status));
        }
      })
  }
};
export default profileDataReducer;
