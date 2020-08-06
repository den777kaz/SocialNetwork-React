import {applyMiddleware, combineReducers, createStore} from "redux";
import profileDataReducer from "./profileDataReducer";
import messagesDataReducer from "./messagesDataReducer";
import friendsDataReducer from "./friendsDataReducer";
import usersDataReducer from "./usersDataReducer";
import usersAuthReducer from "./usersAuthReducer";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

let reducers =  combineReducers({
  profileData:  profileDataReducer,
  messagesData: messagesDataReducer,
  friendsData:  friendsDataReducer,
  usersData:    usersDataReducer,
  auth:         usersAuthReducer,
  form:         formReducer,
  app:          appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;
